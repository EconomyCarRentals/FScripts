/**
 * @Version 1.0
 * @Date 06/10/2017
 * @Author Argiris
 * @Changelog Launch
 */

/**
 * The Main function.
 */
function main() {
    USER = "script-service";
    PASS = "5greenhorses";
    BASE = "jdbc:mysql://23.251.133.254:3306";
    conn = Jdbc.getConnection(BASE, USER, PASS);
    conn.setAutoCommit(false);
    var ids = [];
    var stmt = conn.prepareStatement('SELECT acc_id FROM `black-hole`.new_positive_kw UNION SELECT acc_id FROM `black-hole`.new_camp_neg_kw UNION SELECT acc_id FROM `black-hole`.new_adgr_neg_kw LIMIT 50;');
    var results = stmt.executeQuery();
    while (results.next()) {
        ids.push(results.getObject('acc_id'));
    }
    Logger.log(ids);
    var accountSelector = MccApp
            .accounts()
            .withIds(ids)
            .executeInParallel('sqr');
}

/**
 * Inserts keywords into Accounts.
 * 
 * @returns nothing
 */
function sqr() {
    USER = "script-service";
    PASS = "5greenhorses";
    BASE = "jdbc:mysql://23.251.133.254:3306";
    conn = Jdbc.getConnection(BASE, USER, PASS);
    conn.setAutoCommit(false);

    handler = new SqrHandler();
    handler.createAdGroupNegativeKeywords();
    handler.createCampaignNegativeKeywords();
    handler.createPositiveKeywords();

    conn.close();
}

/**
 * Creates all kinds of keywords based on SQR.
 * 
 * @returns {null}
 */
function SqrHandler() {

    /**
     * Creates negative keywords in the specified adgroups.
     * 
     * @return Returns nothing.
     */
    this.createAdGroupNegativeKeywords = function () {
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
    };

    /**
     * Creates negative keywords in the specified campaigns.
     * 
     * @return Returns nothing.
     */
    this.createCampaignNegativeKeywords = function () {
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
    };

    /**
     * Creates positive keywords in the specified campaigns, adgroups.
     * 
     * @return Returns nothing.
     */
    this.createPositiveKeywords = function () {
        var cid = AdWordsApp.currentAccount().getCustomerId().replace(/\-/g, "");
        var keywords = [];
        var dump = [];
        var matchtypeMap = {"B": "BROAD", "E": "EXACT", "P": "PHRASE"};
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
                var keywordCheck = AdWordsApp
                        .keywords()
                        .withCondition("Text = '" + keywords[i]["searchterm"] + "'")
                        .withCondition("KeywordMatchType = " + matchtypeMap[keywords[i]["matchtype"]])
                        .get();
                if (keywordCheck.totalNumEntities() == 0) {
                    var adGroupIterator = AdWordsApp
                            .adGroups()
                            .withCondition("AdGroupName CONTAINS '" + keywords[i]["adgr_name"] + "'")
                            .get();
                    if (adGroupIterator.totalNumEntities() == 1) {
                        var adGroup = adGroupIterator.next();
                        var keywordIterator = adGroup
                                .keywords()
                                .withCondition("Text = '" + keywords[i]["keyword"].replace("[", "").replace("]", "").replace("\"", "").replace("\"", "") + "'")
                                .get();
                        if (keywordIterator.totalNumEntities() >= 1) {
                            var parentUrls = keywordIterator.next().urls();
                            adGroup.newKeywordBuilder()
                                    .withText(formatKeywordByMatchtype(keywords[i]["searchterm"], keywords[i]["matchtype"]))
                                    .withCpc(keywords[i]["cpc"])
                                    .withCustomParameters(parentUrls.getCustomParameters())
                                    .withFinalUrl(parentUrls.getFinalUrl().replace(/{ignore}.*/, "{ignore}&keep=" + keywords[i]["keep_flag"]))
                                    .build();
                            count++;
                        } else if (keywordIterator.totalNumEntities() == 0) {
                            dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "Original Keyword does not Exist"]);
                        } else {
                            var msg = "";
                            while (keywordIterator.hasNext()) {
                                var item = keywordIterator.next();
                                msg += item.getAdGroup().getId() + "#" + item.getId() + ";";
                            }
                            dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "More than one Original Keywords: " + msg]);
                        }
                    } else if (adGroupIterator.totalNumEntities() == 0) {
                        dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "AdGroup does not Exist"]);
                    } else {
                        var msg = "";
                        while (adGroupIterator.hasNext()) {
                            var item = adGroupIterator.next();
                            msg += item.getId() + ";";
                        }
                        dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "More than one AdGroup: " + msg]);
                    }
                } else {
                    var msg = "";
                    while (keywordCheck.hasNext()) {
                        var item = keywordCheck.next();
                        msg += item.getAdGroup().getId() + "#" + item.getId() + ";";
                    }
                    dump.push([cid, keywords[i]["adgr_name"], keywords[i]["keyword"], keywords[i]["searchterm"], keywords[i]["matchtype"], keywords[i]["cpc"], keywords[i]["keep_flag"], "Keyword Already Exists: " + msg]);
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
    };

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

}