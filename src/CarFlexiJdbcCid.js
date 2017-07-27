/**
 * @Version 3.0
 * @Date 27/07/2017
 * @Author Argiris
 * @Changelog Sends mail on unrecognized record
 * 
 * @Version 2.1
 * @Date 19/07/2017
 * @Author Argiris
 * @Changelog dual source of keywords - preparation to next version
 * 
 * @Version 2.0
 * @Date 06/06/2017
 * @Author Argiris
 * @Changelog migrated to singularity database
 * 
 * @Version 1.0
 * @Date 15/09/16
 * @Author Argiris
 * @Changelog Launch, campaignBabysitting, insertNewKeywords
 */

/**
 * The Main Function.
 * 
 * <p>
 * The beginning of everything, the center of the world, the singularity.
 * <p>
 * The Daenerys of House Targaryen, the First of Her Name, Queen of Meereen,
 * Andals and the First Men, Lady Regnant of the Seven Kingdoms, Protector of
 * the Realm, Khaleesi of the Great Grass Sea, Breaker of Chains and Mother of
 * Dragons.
 * <p>
 */
function main() {
    user = "script-service";
    userPwd = "5greenhorses";
    dbUrl = "jdbc:mysql://23.251.133.254:3306/";
    conn = Jdbc.getConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);

    CreateAdGroupNegativeKeywords();
    CreateCampaignNegativeKeywords();
    CreatePositiveKeywords();

    conn.close();
}

/**
 * Synchronizes campaigns into database from AdWords.
 * 
 * @return Returns nothing.
 */
function campaignBabysitting() {
    var cid = AdWordsApp.currentAccount().getCustomerId();
    var instructions = [[]];
    if (checkAccount(cid)) {
        instructions = computeCampaignDiff(getDbCampaigns(cid),
                getAccountCampaigns());
        Logger.log(insertCampaignInDb(cid, instructions));
        Logger.log(updateCampaignInDb(cid, instructions));
    } else {
        Logger.log("Error");
    }
}

/**
 * Checks if Account exists in database.
 * 
 * @param cid
 *            The id of the account.
 * @return {Boolean} Exists or not
 */
function checkAccount(cid) {
    var returnValue = false;
    var currentAccount = AdWordsApp.currentAccount();
    var stmt = conn.prepareStatement('CALL `black-hole`.check_account(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    if (results.next()) {
        returnValue = true;
    }
    return returnValue;
}

/**
 * Retrieves all account's campaigns.
 * 
 * <p>
 * Retrieves enabled, paused and removed campaigns. Bundles them in a key-value
 * map. The key is the id of the campaign as google sets it. The value is the
 * name of the campaign at the time of execution.
 * <p>
 * 
 * @return {Object} Key-value containing JS Object.
 */
function getAccountCampaigns() {
    var map = {};
    var selectClause = ["CampaignId", "CampaignName"].join(", ");
    var query = ["SELECT " + selectClause, "FROM CAMPAIGN_PERFORMANCE_REPORT"]
            .join(" ");
    var report = AdWordsApp.report(query);
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        var name = item.CampaignName.replace(/\[(.*?)\]/gi, '');
        map[id] = name;
    }
    return map;
}

/**
 * Retrieves all database's campaigns.
 * 
 * <p>
 * Retrieves campaigns of a single account from the database. Bundles them in a
 * key-value map. The key is the id of the campaign as google sets it. The value
 * is the name of the campaign.
 * <p>
 * 
 * @param cid
 *            The id of the account.
 * @return {Object} Key-value containing JS Object.
 */
function getDbCampaigns(cid) {
    var map = {};
    var stmt = conn.prepareStatement('CALL CarFlexi.get_campaigns_of_acc(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    while (results.next()) {
        map[results.getObject('id')] = results.getObject('camp_name');
    }
    return map;
}

/**
 * Computes the differences in campaigns, between database and google.
 * 
 * <p>
 * Computes if a campaign does not exist at all, or if its name has changed in
 * the database, and compiles the corresponding output.
 * <p>
 * 
 * @param dbMap
 *            {Object} mapping the campaigns in database.
 * @param campaignMap
 *            {Object} mapping the campaigns in google.
 * @return {Array} Contains insertion records at index 0, update records at 1
 *         index.
 */
function computeCampaignDiff(dbMap, campaignMap) {
    var insertArray = [];
    var updateArray = [];
    for (var key in campaignMap) {
        if (dbMap[key] == null) {
            insertArray.push([key, campaignMap[key]]);
        } else if (dbMap[key] != campaignMap[key]) {
            updateArray.push([key, campaignMap[key]]);
        } else {
            // Send Mail On Error
        }
    }
    return [insertArray, updateArray];
}

/**
 * Inserts campaigns into the database.
 * 
 * @param cid
 *            {String} The id of the account.
 * @param instructions
 *            {Array} Contains insertion records at index 0, update records at 1
 *            index.
 * @return {String} Executed operations count.
 */
function insertCampaignInDb(cid, instructions) {
    var returnValue = "";
    if (instructions[0].length > 0) {
        var stmt = conn
                .prepareStatement('CALL CarFlexi.insert_campaign(?, ?, ?)');
        for (var i in instructions[0]) {
            stmt.setString(1, cid);
            stmt.setString(2, instructions[0][i][0]);
            stmt.setString(3, instructions[0][i][1]);
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        returnValue = "Insertion Completed, Batch Size: " + batch.length;
    } else {
        returnValue = "No insertion operations";
    }
    return returnValue;
}

/**
 * Updates campaigns' names that exist into the database.
 * 
 * @param cid
 *            {String} The id of the account.
 * @param instructions
 *            {Array} Contains insertion records at index 0, update records at 1
 *            index.
 * @return {String} Executed operations count.
 */
function updateCampaignInDb(cid, instructions) {
    var returnValue = "";
    if (instructions[1].length > 0) {
        var stmt = conn
                .prepareStatement('CALL CarFlexi.update_camp_name(?, ?)');
        for (var i in instructions[1]) {
            stmt.setString(1, instructions[1][i][0]);
            stmt.setString(2, instructions[1][i][1]);
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        returnValue = "Update Completed, Batch Size: " + batch.length;
    } else {
        returnValue = "No update operations";
    }
    return returnValue;
}

/**
 * Converts plain keyword text to imply its matchtype through its text.
 * 
 * <p>
 * Exact keywords are prefixed with '[' and suffixed with ']'.<br>
 * Phrase keywords are surrounded with '"'.<br>
 * Broad keywords remain untouched.
 * </p>
 * <p>
 * Does not format Broad keywords to Broad Match Modified (BMM).<br>
 * Those keywords should be provided in BMM format (with '+' where appropriate).
 * </p>
 * 
 * @param keywordText
 *            Plain text of the keyword.
 * @param matchtype
 *            Matchtype of the keyword in range [E, P, B].
 * @returns {String} The formated keyword.
 */
function formatKeywordByMatchtype(keywordText, matchtype) {
    var formatedKeyword = "";
    if (matchtype == "E") {
        formatedKeyword = "[" + keywordText + "]";
    } else if (matchtype == "P") {
        formatedKeyword = "\"" + keywordText + "\"";
    } else if (matchtype == "B") {
        formatedKeyword = keywordText;
    } else {
        // Send Mail On Error
    }
    return formatedKeyword;
}

/**
 * Creates negative keywords in the specified adgroups.
 * 
 * @return Returns nothing.
 */
function CreateAdGroupNegativeKeywords() {
    var cid = AdWordsApp.currentAccount().getCustomerId().replace(/\-/g, "");
    var keywords = [];
    var dump = [];
    var stmt = conn.prepareStatement('CALL `black-hole`.select_new_adgr_neg_kw_by_acc(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    while (results.next()) {
        keywords.push({"adgr_name": results.getObject('adgr_name'),
            "searchterm": results.getObject('searchterm'),
            "matchtype": results.getObject('matchtype')});
    }
    if (keywords.length > 0) {
        var count = 0;
        for (var i in keywords) {
            var adGroupIterator = AdWordsApp
                    .adGroups()
                    .withCondition("Name CONTAINS '" + keywords[i]["adgr_name"] + "'")
                    .get();
            if (adGroupIterator.totalNumEntities() == 1) {
                adGroupIterator.next().createNegativeKeyword(formatKeywordByMatchtype(keywords[i]["searchterm"], keywords[i]["matchtype"]));
                count++;
            } else {
                dump.push([cid, keywords[i]["adgr_name"], keywords[i]["searchterm"], keywords[i]["matchtype"], "Unresolved AdGroup"]);
            }
        }
        Logger.log("AdGroup Negative Keywords Inserted: " + count);
        if (dump.length > 0 && MailApp.getRemainingDailyQuota() > 0) {
            var dumpMessage = "<ul>";
            for (var i in dump) {
                dumpMessage += "<li>" + dump[i].join(", ") + "</li>";
            }
            dumpMessage += "</ul>";
            MailApp.sendEmail({
                to: "yorgos@carflexi.com",
                cc: "akaintariscarflexi@gmail.com",
                name: "CarFlexi SQR Script Services",
                subject: "AdGroup Negative Keywords not Inserted in " + cid,
                htmlBody: dumpMessage
            });
            Logger.log("Sent an e-mail for AdGroup Negative Keywords not Inserted.");
        }
        var stmt = conn.prepareStatement('CALL `black-hole`.remove_new_adgr_neg_kw_by_acc(?)');
        stmt.setString(1, cid);
        stmt.addBatch();
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("New AdGroup Negative Keywords removed from database queue");
    } else {
        Logger.log("No AdGroup Negative Keywords");
    }
}

/**
 * Creates negative keywords in the specified campaigns.
 * 
 * @return Returns nothing.
 */
function CreateCampaignNegativeKeywords() {
    var cid = AdWordsApp.currentAccount().getCustomerId().replace(/\-/g, "");
    var keywords = [];
    var dump = [];
    var stmt = conn.prepareStatement('CALL `black-hole`.select_new_camp_neg_kw_by_acc(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    while (results.next()) {
        keywords.push({"camp_name": results.getObject('camp_name'),
            "searchterm": results.getObject('searchterm'),
            "matchtype": results.getObject('matchtype')});
    }
    if (keywords.length > 0) {
        var count = 0;
        for (var i in keywords) {
            var campaignIterator = AdWordsApp
                    .campaigns()
                    .withCondition("Name CONTAINS '" + keywords[i]["camp_name"] + "'")
                    .get();
            if (campaignIterator.totalNumEntities() == 1) {
                campaignIterator.next().createNegativeKeyword(formatKeywordByMatchtype(keywords[i]["searchterm"], keywords[i]["matchtype"]));
                count++;
            } else {
                dump.push([cid, keywords[i]["camp_name"], keywords[i]["searchterm"], keywords[i]["matchtype"], "Unresolved Campaign"]);
            }
        }
        Logger.log("Campaign Negative Keywords Inserted: " + count);
        if (dump.length > 0 && MailApp.getRemainingDailyQuota() > 0) {
            var dumpMessage = "<ul>";
            for (var i in dump) {
                dumpMessage += "<li>" + dump[i].join(", ") + "</li>";
            }
            dumpMessage += "</ul>";
            MailApp.sendEmail({
                to: "yorgos@carflexi.com",
                cc: "akaintariscarflexi@gmail.com",
                name: "CarFlexi SQR Script Services",
                subject: "Campaign Negative Keywords not Inserted in " + cid,
                htmlBody: dumpMessage
            });
            Logger.log("Sent an e-mail for Campaign Negative Keywords not Inserted.");
        }
        var stmt = conn.prepareStatement('CALL `black-hole`.remove_new_camp_neg_kw_by_acc(?)');
        stmt.setString(1, cid);
        stmt.addBatch();
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("New Campaign Negative Keywords removed from database queue");
    } else {
        Logger.log("No Campaign Negative Keywords");
    }
}

/**
 * Creates positive keywords in the specified campaigns, adgroups.
 * 
 * @return Returns nothing.
 */
function CreatePositiveKeywords() {
    var cid = AdWordsApp.currentAccount().getCustomerId().replace(/\-/g, "");
    var keywords = [];
    var dump = [];
    var stmt = conn.prepareStatement('CALL `black-hole`.select_new_positive_kw_by_acc(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    while (results.next()) {
        keywords.push({"adgr_name": results.getObject('adgr_name'),
            "keyword": results.getObject('keyword'),
            "searchterm": results.getObject('searchterm'),
            "matchtype": results.getObject('matchtype'),
            "cpc": results.getObject('cpc'),
            "keep_flag": results.getObject('keep_flag')});
    }
    if (keywords.length > 0) {
        var count = 0;
        for (var i in keywords) {
            var keywordIterator = AdWordsApp
                    .keywords()
                    .withCondition("AdGroupName CONTAINS '" + keywords[i]["adgr_name"] + "'")
                    .withCondition("Text = '" + keywords[i]["keyword"].replace("[", "").replace("]", "").replace("\"", "").replace("\"", "") + "'")
                    .get();
            if (keywordIterator.totalNumEntities() >= 1) {
                var adGroupIterator = AdWordsApp
                        .adGroups()
                        .withCondition("AdGroupName CONTAINS '" + keywords[i]["adgr_name"] + "'")
                        .get();
                if (adGroupIterator.totalNumEntities() == 1) {
                    var parentUrls = keywordIterator.next().urls();
                    adGroupIterator.next().newKeywordBuilder()
                            .withText(formatKeywordByMatchtype(keywords[i]["searchterm"], keywords[i]["matchtype"]))
                            .withCpc(keywords[i]["cpc"])
                            .withCustomParameters(parentUrls.getCustomParameters())
                            .withFinalUrl(parentUrls.getFinalUrl().replace(/{ignore}.*/, "{ignore}&keep=" + keywords[i]["keep_flag"]))
                            .build();
                    count++;
                } else {
                    dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "Unresolved AdGroup"]);
                }
            } else {
                dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "Unresolved Keyword/AdGroup"]);
            }
        }
        Logger.log("Positive Keywords Inserted: " + count);
        if (dump.length > 0 && MailApp.getRemainingDailyQuota() > 0) {
            var dumpMessage = "<ul>";
            for (var i in dump) {
                dumpMessage += "<li>" + dump[i].join(", ") + "</li>";
            }
            dumpMessage += "</ul>";
            MailApp.sendEmail({
                to: "yorgos@carflexi.com",
                cc: "akaintariscarflexi@gmail.com",
                name: "CarFlexi SQR Script Services",
                subject: "Positive Keywords not Inserted in " + cid,
                htmlBody: dumpMessage
            });
            Logger.log("Sent an e-mail for Positive Keywords not Inserted.");
        }
        var stmt = conn.prepareStatement('CALL `black-hole`.remove_new_positive_kw_by_acc(?)');
        stmt.setString(1, cid);
        stmt.addBatch();
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("New Positive Keywords removed from database queue");
    } else {
        Logger.log("No Positive Keywords");
    }
}
