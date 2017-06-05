/**
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
    user = "CarFlexiJDBC";
    userPwd = "manolis11";
    dbUrl = "jdbc:mysql://173.194.225.43:3306/";
    conn = Jdbc.getConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);

    campaignBabysitting();
    insertNewKeywords();

    conn.close();
    //end of file, kk thanx bb
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
    var stmt = conn.prepareStatement('CALL CarFlexi.check_account(?)');
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
 * Creates new keywords in AdWords. Can be from all types and matchtypes.
 * 
 * @return Returns nothing.
 */
function insertNewKeywords() {
    var cid = AdWordsApp.currentAccount().getCustomerId();
    var instructions = [[]];
    if (checkAccount(cid)) {
        instructions = getNewKeywords(cid);
        Logger.log(createPositiveKeywords(instructions));
        Logger.log(createCampaignNegativeKeywords(instructions));
        Logger.log(createAdGroupNegativeKeywords(instructions));
        if (instructions[0].length > 0 || instructions[1].length > 0
                || instructions[2].length > 0) {
            Logger.log(removeNewKeywordsFromDb(cid));
        }
    } else {
        Logger.log("Error");
    }
}

/**
 * Fetches keywords to insert into AdWords.
 * 
 * @param cid
 *            The id of the account.
 * @returns {Array} Positive keywords at index 0, campaign negative keywords at
 *          index 1, adgroup negative keywords at index 2.
 */
function getNewKeywords(cid) {
    var positive = [];
    var campNegative = [];
    var adgrNegative = [];
    var stmt = conn.prepareStatement('CALL CarFlexi.get_new_kw_of_acc(?)');
    stmt.setString(1, cid);
    var results = stmt.executeQuery();
    while (results.next()) {
        var type = results.getObject('keywordtype');
        if (type == "P") {
            positive.push([results.getObject('adgr_name'),
                results.getObject('keyword'),
                results.getObject('search_term'),
                results.getObject('matchtype'), results.getObject('cpc'),
                results.getObject('keep_flag')]);
        } else if (type == "CN") {
            campNegative.push([results.getObject('camp_name'),
                results.getObject('search_term'),
                results.getObject('matchtype')]);
        } else if (type == "AN") {
            adgrNegative.push([results.getObject('adgr_name'),
                results.getObject('search_term'),
                results.getObject('matchtype')]);
        } else {
            // Send Mail On Error
        }
    }
    return [positive, campNegative, adgrNegative];
}

/**
 * Removes newly created keywords from the database.
 * 
 * @param cid
 *            The id of the account.
 * @returns {String} Executed operations count.
 */
function removeNewKeywordsFromDb(cid) {
    var stmt = conn.prepareStatement('CALL CarFlexi.remove_new_kw_of_acc(?)');
    stmt.setString(1, cid);
    stmt.addBatch();
    var batch = stmt.executeBatch();
    conn.commit();
    return "New keywords removed from database queue";
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
 * Creates positive keywords in the specified campaigns, adgroups.
 * 
 * @param instructions
 *            Positive keywords at index 0, campaign negative keywords at index
 *            1, adgroup negative keywords at index 2.
 * @returns {String} Executed operations count.
 */
function createPositiveKeywords(instructions) {
    var returnValue = "";
    if (instructions[0].length > 0) {
        var count = 0;
        for (var i in instructions[0]) {
            var keywordIterator = AdWordsApp.keywords().withCondition(
                    "AdGroupName CONTAINS '" + instructions[0][i][0] + "'")
                    .withCondition(
                            "Text = '"
                            + instructions[0][i][1].replace("[", "")
                            .replace("]", "").replace("\"", "")
                            .replace("\"", "") + "'").get();
            if (keywordIterator.totalNumEntities() >= 1) {
                var adGroupIterator = AdWordsApp.adGroups().withCondition(
                        "AdGroupName CONTAINS '" + instructions[0][i][0] + "'")
                        .get();
                if (adGroupIterator.totalNumEntities() == 1) {
                    var parentUrls = keywordIterator.next().urls();
                    adGroupIterator.next().newKeywordBuilder().withText(
                            formatKeywordByMatchtype(instructions[0][i][2],
                                    instructions[0][i][3])).withCpc(
                            instructions[0][i][4]).withCustomParameters(
                            parentUrls.getCustomParameters()).withFinalUrl(
                            parentUrls.getFinalUrl().replace(/{ignore}.*/,
                            "{ignore}&keep=" + instructions[0][i][5]))
                            .build();
                    count++;
                } else {
                    // Send Mail On Error
                }
            } else {
                // Send Mail On Error
            }
        }
        returnValue = "Positive Keywords Inserted: " + count;
    } else {
        returnValue = "No Positive Keywords";
    }
    return returnValue;
}

/**
 * Creates negative keywords in the specified campaigns.
 * 
 * @param instructions
 *            Positive keywords at index 0, campaign negative keywords at index
 *            1, adgroup negative keywords at index 2.
 * @returns {String} Executed operations count.
 */
function createCampaignNegativeKeywords(instructions) {
    var returnValue = "";
    if (instructions[1].length > 0) {
        var count = 0;
        for (var i in instructions[1]) {
            var campaignIterator = AdWordsApp.campaigns().withCondition(
                    "Name CONTAINS '" + instructions[1][i][0] + "'").get();
            if (campaignIterator.totalNumEntities() == 1) {
                campaignIterator.next().createNegativeKeyword(
                        formatKeywordByMatchtype(instructions[1][i][1],
                                instructions[1][i][2]));
                count++;
            } else {
                // Send Mail On Error
            }
        }
        returnValue = "Campaign Negative Keywords Inserted: " + count;
    } else {
        returnValue = "No Campaign Negative Keywords";
    }
    return returnValue;
}

/**
 * Creates negative keywords in the specified adgroups.
 * 
 * @param instructions
 *            Positive keywords at index 0, campaign negative keywords at index
 *            1, adgroup negative keywords at index 2.
 * @returns {String} Executed operations count.
 */
function createAdGroupNegativeKeywords(instructions) {
    var returnValue = "";
    if (instructions[2].length > 0) {
        var count = 0;
        for (var i in instructions[2]) {
            var adGroupIterator = AdWordsApp.adGroups().withCondition(
                    "Name CONTAINS '" + instructions[2][i][0] + "'").get();
            if (adGroupIterator.totalNumEntities() == 1) {
                adGroupIterator.next().createNegativeKeyword(
                        formatKeywordByMatchtype(instructions[2][i][1],
                                instructions[2][i][2]));
                count++;
            } else {
                // Send Mail On Error
            }
        }
        returnValue = "AdGroup Negative Keywords Inserted: " + count;
    } else {
        returnValue = "No AdGroup Negative Keywords";
    }
    return returnValue;
}
