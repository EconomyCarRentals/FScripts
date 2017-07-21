/**
 * @Version 2.2
 * @Date 21/07/2017
 * @Author Argiris
 * @Changelog dual source of keywords - preparation to next version
 * 
 * @Version 2.1
 * @Date 12/07/2017
 * @Author Argiris
 * @Changelog keyword insertion broken by type
 * 
 * @Version 2.0
 * @Date 02/06/2017
 * @Author Argiris
 * @Changelog migrated to singularity database
 * 
 * @Version 1.1
 * @Date 03/02/17
 * @Author Argiris
 * @Changelog At loadQueries added handling for ' in Campaign and AdGroup names
 * 
 * @Version 1.0
 * @Date 28/09/16
 * @Author Argiris
 * @Changelog Launch, loadQueries, accountBabysitting
 */

/**
 * The Main function.
 */
function main() {
    user = "script-service";
    userPwd = "5greenhorses";
    dbUrl = "jdbc:mysql://23.251.133.254:3306/";
    conn = Jdbc.getConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);

    Logger.log(loadPositiveQueries());
    Logger.log(loadAdGroupNegativeQueries());
    Logger.log(loadCampaignNegativeQueries());

    conn.close();
}

/**
 * Loads search terms into the database to become new positive keywords.
 * 
 * @return Returns nothing.
 */
function loadPositiveQueries() {
    var sheet = SpreadsheetApp
            .openByUrl("https://docs.google.com/spreadsheets/d/1iQmYjgtasdl8Ipf2ma22Ma2xrRkWLrudIKzrWRbhwUM/edit#gid=0")
            .getSheetByName("Positive");
    var queries = sheet.getRange("A:I").getValues();
    var stmt = conn.prepareStatement('CALL `black-hole`.insert_new_positive_kw(?, ?, ?, ?, ?, ?, ?)');
    if (queries.length > 1) {
        for (var i in queries) {
            if (i == 0) {
                continue;
            }
            stmt.setString(1, queries[i][0].replace(/\-/g, "")); //Account Id
            stmt.setString(2, queries[i][2].replace(/\[.*?\]/, "").replace("'", "\\'")); //AdGroup Name
            stmt.setString(3, queries[i][4].replace(/@/, "")); //Search Term
            stmt.setString(4, queries[i][6]); //Matchtype
            stmt.setString(5, queries[i][3].replace(/@/, "")); //Keyword
            stmt.setDouble(6, parseFloat(queries[i][7]));// cpc
            stmt.setString(7, queries[i][8]); //Keep Flag
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("Positive Keyword Insertion Completed, Batch Size: " + batch.length);
        sheet.deleteRows(2, sheet.getLastRow() - 1);
        sheet.getRange("A1:I1").setValues(
                [["Account Id", "Campaign Name", "AdGroup Name", "Keyword",
                        "Search Term", "Type", "Matchtype", "Cpc", "Flag"]]);
    } else {
        Logger.log("No Positive keyword insertion operations");
    }
}

/**
 * Loads search terms into the database to become new AdGroup negative keywords.
 * 
 * @return Returns nothing.
 */
function loadAdGroupNegativeQueries() {
    var sheet = SpreadsheetApp
            .openByUrl("https://docs.google.com/spreadsheets/d/1iQmYjgtasdl8Ipf2ma22Ma2xrRkWLrudIKzrWRbhwUM/edit#gid=0")
            .getSheetByName("AdGroup Negative");
    var queries = sheet.getRange("A:I").getValues();
    var stmt = conn.prepareStatement('CALL `black-hole`.insert_new_adgr_neg_kw(?, ?, ?, ?)');
    if (queries.length > 1) {
        for (var i in queries) {
            if (i == 0) {
                continue;
            }
            stmt.setString(1, queries[i][0].replace(/\-/g, "")); //Account Id
            stmt.setString(2, queries[i][2].replace(/\[.*?\]/, "").replace("'", "\\'")); //AdGroup Name
            stmt.setString(3, queries[i][4].replace(/@/, "")); //Search Term
            stmt.setString(4, queries[i][6]); //Matchtype
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("AdGroup Negative Keyword Insertion Completed, Batch Size: " + batch.length);
        sheet.deleteRows(2, sheet.getLastRow() - 1);
        sheet.getRange("A1:I1").setValues(
                [["Account Id", "Campaign Name", "AdGroup Name", "Keyword",
                        "Search Term", "Type", "Matchtype", "Cpc", "Flag"]]);
    } else {
        Logger.log("No AdGroup Negative keyword insertion operations");
    }
}

/**
 * Loads search terms into the database to become new Campaign Negative keywords.
 * 
 * @return Returns nothing.
 */
function loadCampaignNegativeQueries() {
    var sheet = SpreadsheetApp
            .openByUrl("https://docs.google.com/spreadsheets/d/1iQmYjgtasdl8Ipf2ma22Ma2xrRkWLrudIKzrWRbhwUM/edit#gid=0")
            .getSheetByName("Campaign Negative");
    var queries = sheet.getRange("A:I").getValues();
    var stmt = conn.prepareStatement('CALL `black-hole`.insert_new_camp_neg_kw(?, ?, ?, ?)');
    if (queries.length > 1) {
        for (var i in queries) {
            if (i == 0) {
                continue;
            }
            stmt.setString(1, queries[i][0].replace(/\-/g, "")); //Account Id
            stmt.setString(2, queries[i][1].replace(/\[.*?\]/, "").replace("'", "\\'")); //Campaign Name
            stmt.setString(3, queries[i][4].replace(/@/, "")); //Search Term
            stmt.setString(4, queries[i][6]); //Matchtype
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        Logger.log("Campaign Negative Keyword Insertion Completed, Batch Size: " + batch.length);
        sheet.deleteRows(2, sheet.getLastRow() - 1);
        sheet.getRange("A1:I1").setValues(
                [["Account Id", "Campaign Name", "AdGroup Name", "Keyword",
                        "Search Term", "Type", "Matchtype", "Cpc", "Flag"]]);
    } else {
        Logger.log("No Campaign Negative keyword insertion operations");
    }
}

/**
 * Synchronizes accounts into database from AdWords.
 * 
 * @return Returns nothing.
 */
function accountBabysitting() {
    var instructions = computeAccountDiff(getDbAccounts(), getMccAccounts());
    Logger.log(insertAccountInDb(instructions));
    Logger.log(updateAccountInDb(instructions));
}

/**
 * Retrieves all mcc's accounts.
 * 
 * <p>
 * Retrieves enabled, paused and removed accounts. Bundles them in a key-value
 * map. The key is the id of the account as google sets it. The value is the
 * name of the account at the time of execution.
 * <p>
 * 
 * @returns {Object} Key-value containing JS Object.
 */
function getMccAccounts() {
    var map = {};
    var accountIterator = MccApp.accounts().get();
    while (accountIterator.hasNext()) {
        var account = accountIterator.next();
        var id = account.getCustomerId();
        var name = account.getName();
        map[id] = name;
    }
    return map;
}

/**
 * Retrieves all database's accounts.
 * 
 * <p>
 * Retrieves accounts from the database. Bundles them in a key-value map. The
 * key is the id of the account as google sets it. The value is the name of the
 * account.
 * <p>
 * 
 * @returns {Object} Key-value containing JS Object.
 */
function getDbAccounts() {
    var map = {};
    var stmt = conn.prepareStatement('CALL `black-hole`.select_accounts()');
    var results = stmt.executeQuery();
    while (results.next()) {
        map[results.getObject('accid')] = results.getObject('accName');
    }
    return map;
}

/**
 * Computes the differences in accounts, between database and google.
 * 
 * <p>
 * Computes if an account does not exist at all, or if its name has changed in
 * the database, and compiles the corresponding output.
 * <p>
 * 
 * @param dbMap
 *            {Object} mapping the accounts in database.
 * @param accMap
 *            {Object} mapping the accounts in google.
 * @returns {Array} Contains insertion records at index 0, update records at 1
 *          index.
 */
function computeAccountDiff(dbMap, accMap) {
    var insertArray = [];
    var updateArray = [];
    for (var key in accMap) {
        if (dbMap[key] == null) {
            insertArray.push([key, accMap[key]]);
        } else if (dbMap[key] != accMap[key]) {
            updateArray.push([key, accMap[key]]);
        } else {
            // Send Mail On Error
        }
    }
    return [insertArray, updateArray];
}

/**
 * Inserts accounts into the database.
 * 
 * @param instructions
 *            {Array} Contains insertion records at index 0, update records at 1
 *            index.
 * @returns {String} Executed operations count.
 */
function insertAccountInDb(instructions) {
    var returnValue = "";
    if (instructions[0].length > 0) {
        var stmt = conn.prepareStatement('CALL `black-hole`.insert_account(?, ?)');
        for (var i in instructions[0]) {
            stmt.setString(1, instructions[0][i][0]);
            stmt.setString(2, instructions[0][i][1]);
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        returnValue = "Account Insertion Completed, Batch Size: "
                + batch.length;
    } else {
        returnValue = "No account insertion operations";
    }
    return returnValue;
}

/**
 * Updates accounts' names that exist into the database.
 * 
 * @param instructions
 *            {Array} Contains insertion records at index 0, update records at 1
 *            index.
 * @returns {String} Executed operations count.
 */
function updateAccountInDb(instructions) {
    var returnValue = "";
    if (instructions[1].length > 0) {
        var stmt = conn.prepareStatement('CALL `black-hole`.update_acc_name(?, ?)');
        for (var i in instructions[1]) {
            stmt.setString(1, instructions[1][i][0]);
            stmt.setString(2, instructions[1][i][1]);
            stmt.addBatch();
        }
        var batch = stmt.executeBatch();
        conn.commit();
        returnValue = "Account Update Completed, Batch Size: " + batch.length;
    } else {
        returnValue = "No account update operations";
    }
    return returnValue;
}
