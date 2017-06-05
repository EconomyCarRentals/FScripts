/**
 * @Version 4.4
 * @Date 01/06/2017
 * @Changelog cpKeyword negative bonus fix
 * 
 * @Version 4.3.4
 * @Date 30/05/2017
 * @Changelog force manual, bidder changes
 * 
 * @Version 4.3.3
 * @Date 25/05/2017
 * @Changelog new cp cases
 * 
 * @Version 4.3.2
 * @Date 20/05/2017
 * @Changelog Fixed bidder problems
 *
 * @Version 4.3.1
 * @Date 20/05/2017
 * @Changelog Fixed JSON formatting
 *
 * @Version 4.3
 * @Date 18/05/2017
 * @Changelog added database conectivity, loggers
 * 
 * @Version 4.2.1
 * @Date 15/05/2017
 * @Changelog fix complementary bidder
 * 
 * @Version 4.2
 * @Date 12/05/2017
 * @Changelog logging clearBQ execution, hardcoded NaN fpagebid,
 *            max bid fpageCpc*1.2, complementaryBidder, new trf
 * 
 * @Version 4.1.1
 * @Date 03/05/2017
 * @Changelog extra cp conditions, manual bonus to adgroup, trf split
 * 
 * @Version 4.1
 * @Date 28/04/2017
 * @Changelog Filtering by trg
 * 
 * @Version 4.0
 * @Date 20/04/2017
 * @Changelog BigQuery implementation
 * 
 * @Version 3.1
 * @Date 12/04/2017
 * @Changelog mashup and extramashup
 * 
 * @Version 3.0
 * @Date 04/04/2017
 * @Changelog Ceased all Final Url altering
 * 
 * @Version 2.1.2
 * @Date 20/03/2017
 * @Changelog testing different schedules bu verb
 * 
 * @Version 2.1.1
 * @Date 10/03/2017
 * @Changelog reschedule and trf
 * 
 * @Version 2.1
 * @Date 09/03/2017
 * @Changelog reschedule
 * 
 * @Version 2.0
 * @Date 01/03/2017
 * @Changelog overhaul
 * 
 * @Version 1.14
 * @Date 04/02/17
 * @Changelog removed pkKeyword, mutated dfKeyword to only cpKeyword, added
 *            clear scripts to 21:00
 * 
 * @Version 1.13
 * @Date 19/12/16
 * @Changelog AWQLDateFormatter
 * 
 * @Version 1.12
 * @Date 08/12/16
 * @Chengelog manual bonus per account, adPauser, AccountKpiSetter,
 *            CampaignKpiSetter, AdGroupKpiSetter, KeywordKpiSetter,
 *            KeywordBidder, added ym01
 * 
 * @Version 1.11.1
 * @Date 11/11/16
 * @Changelog ksKeyword case changes, ks with 0 impressions keywords
 * 
 * @Version 1.11
 * @Date 09/11/16
 * @Changelog getgetDayInYear and isLeapYear with UTC Date/Time Format, om and
 *            oa with separate coefficients, breakdown of assisted conversions
 *            coefficients, ksKeyword case changes
 * 
 * @Version 1.10.3
 * @Date 08/11/16
 * @Changelog time schedule and function name logging
 * 
 * @Version 1.10.2
 * @Date 07/11/16
 * @Changelog fixed coefficients in bidder, ksKeyword case changes
 * 
 * @Version 1.10.1
 * @Date 04/11/16
 * @Changelog added weightedBidsAverage for decreases in bidder
 * 
 * @Version 1.10
 * @Date 03/11/16
 * @Changelog new bidding categories, scheduler sequence change, some ks changes
 * 
 * @Version 1.9.1
 * @Date 27/10/16
 * @Changelog assisted coefficient change
 * 
 * @Version 1.9
 * @Date 25/10/16
 * @Changelog pkKeyword, change in bidder limits, clearPK, clearTT
 * 
 * @Version 1.8
 * @Date 20/10/16
 * @Changelog ks=ya change, bidder schedule change
 * 
 * @Version 1.7.2
 * @Date 23/09/16
 * @Changelog fixed auto bonus by matchtype in ttKeyword
 * 
 * @Version 1.7.1
 * @Date 13/09/16
 * @Changelog fixed manual bonus in ttKeyword
 * 
 * @Version 1.7
 * @Date 08/09/16
 * @Changelog tt for Broad and Phrase, ks new categories, clearAA
 * 
 * @Version 1.6
 * @Date 02/09/16
 * @Changelog removed QS from bidder, ksKeyword ypoxreotiki auksisi/meiwsi, ks=y
 *            to bidder, schedule 1 per day with variable bidder
 * 
 * @Version 1.5
 * @Date 26/08/16
 * @Changelog bidder, cp no NaN, restructure roi selector, schedule 2 per day,
 *            ksKeyword, clearKS
 * 
 * @Version 1.4
 * @Date 19/08/16
 * @Changelog new df, sd for adgroups, rescheduling, entrance cost, tt columns
 *            change, 0 cost with value addressed, clearCP, clearSS, clearSD,
 *            clearCC, restructure roi selector, removed clearTags
 * 
 * @Version 1.3
 * @Date 25/07/16
 * @Changelog sd for keywords
 * 
 * @Version 1.2.1
 * @Date 20/07/16
 * @Changelog fixed cc for generic accounts
 * 
 * @Version 1.2
 * @Date 19/07/16
 * @Changelog account kpi's
 * 
 * @Version 1.1
 * @Date 18/07/16
 * @Changelog tt fixes, manual override, df
 * 
 * @Version 1.0
 * @Date 14/07/16
 * @Changelog Complete Overhaul
 * 
 * @Version 0.1
 * @Date 04/04/16
 * @Changelog Launch
 */

function main() {
    BD = {};
    BD.VERSION = "4.4";
    BD.ACC = {};
    BD.CAMP = {};
    BD.ADGR = {};
    BD.KEYW = {};
    BD.AD = {};
    BD.SITE = {};
    BD.ACC.ASSISTED_COEFF = 0.1;
    BD.CAMP.ASSISTED_COEFF = 0.25;
    BD.ADGR.ASSISTED_COEFF = 0.4;
    BD.KEYW.ASSISTED_COEFF = 0.6;
    BD.AD.ASSISTED_COEFF = 0.5;
    BD.CHANGES_PAGESIZE = 5000; // Max 10000
    BD.WEEK = 7;
    BD.TWO_WEEKS = 14;
    BD.MONTH = 30;
    BD.TWO_MONTHS = 60;
    BD.QUARTER = 90;
    BD.HALF_YEAR = 180;
    BD.THREE_QUARTERS = 270;
    BD.YEAR = 365;
    BD.ALL_TIME = "Fri, 1 Jan 2010 00:00:00 GMT";
    BD.MOTHER_OF_ALL_DATES = "Wed, 1 Jun 2016 00:00:00 GMT";
    BD.POSITION_RANGE = 3;
    BD.EXTENDED_POSITION_RANGE = 6;
    BD.ACC_N9 = 0.00;
    BD.ACC_N8 = 0.20;
    BD.ACC_N7 = 0.35;
    BD.ACC_N6 = 0.50;
    BD.ACC_M5 = 0.70;
    BD.ACC_M4 = 0.80;
    BD.ACC_P3 = 0.90;
    BD.ACC_P2 = 1.00;
    BD.ACC_P1 = 1.10;
    BD.ACC_P0 = 1.10; // BD.ACC_P0 == BD.ACC_P1;
    BD.N9 = 0.00; // n9
    BD.N8 = 0.30; // n8
    BD.N7 = 0.50; // n7
    BD.N6 = 0.70; // n6
    BD.M5 = 0.80; // m5
    BD.M4 = 0.90; // m4
    BD.P3 = 1.15; // p3
    BD.P2 = 1.50; // p2
    BD.P1 = 2.10; // p1
    BD.P0 = 2.10; // BD.P0 == BD.P1;
    BD.ACC.AA = {};
    BD.ACC.AA.ROI_CLICKS = 100;
    BD.ACC.AA.ENTR_CLICKS = 50;
    BD.ACC.AA.ENTR_CONVS = 0;
    BD.ACC.AA.ENTR_ROI = 0.9;
    BD.ACC.SS = {};
    BD.ACC.SS.ROI_CLICKS = 80;
    BD.ACC.SS.ENTR_CLICKS = 40;
    BD.ACC.SS.ENTR_CONVS = 0;
    BD.ACC.SS.ENTR_ROI = 0.9;
    BD.CAMP.CC = {};
    BD.CAMP.CC.ROI_CLICKS = 65;
    BD.CAMP.CC.ENTR_CLICKS = 35;
    BD.CAMP.CC.ENTR_CONVS = 0;
    BD.CAMP.CC.ENTR_ROI = 0.9;
    BD.CAMP.AA = {};
    BD.CAMP.AA.ROI_CLICKS = 90;
    BD.CAMP.AA.ENTR_CLICKS = 40;
    BD.CAMP.AA.ENTR_CONVS = 0;
    BD.CAMP.AA.ENTR_ROI = 0.9;
    BD.CAMP.SS = {};
    BD.CAMP.SS.ROI_CLICKS = 65;
    BD.CAMP.SS.ENTR_CLICKS = 35;
    BD.CAMP.SS.ENTR_CONVS = 0;
    BD.CAMP.SS.ENTR_ROI = 0.9;
    BD.ADGR.AA = {};
    BD.ADGR.AA.ROI_CLICKS = 70;
    BD.ADGR.AA.ENTR_CLICKS = 30;
    BD.ADGR.AA.ENTR_CONVS = 0;
    BD.ADGR.AA.ENTR_ROI = 0.9;
    BD.ADGR.SS = {};
    BD.ADGR.SS.ROI_CLICKS = 38;
    BD.ADGR.SS.ENTR_CLICKS = 24;
    BD.ADGR.SS.ENTR_CONVS = 0;
    BD.ADGR.SS.ENTR_ROI = 0.9;
    BD.ADGR.SD = {};
    BD.ADGR.SD.ROI_CLICKS = 28;
    BD.ADGR.SD.ENTR_CLICKS = 12;
    BD.ADGR.SD.ENTR_CONVS = 0;
    BD.ADGR.SD.ENTR_ROI = 0.9;
    BD.KEYW.AA = {};
    BD.KEYW.AA.ROI_CLICKS = 35;
    BD.KEYW.AA.ENTR_CLICKS = 20;
    BD.KEYW.AA.ENTR_CONVS = 0;
    BD.KEYW.AA.ENTR_ROI = 0.9;
    BD.KEYW.SS = {};
    BD.KEYW.SS.ROI_CLICKS = 19;
    BD.KEYW.SS.ENTR_CLICKS = 12;
    BD.KEYW.SS.ENTR_CONVS = 0;
    BD.KEYW.SS.ENTR_ROI = 0.9;
    BD.KEYW.SD = {};
    BD.KEYW.SD.ROI_CLICKS = 14;
    BD.KEYW.SD.ENTR_CLICKS = 6;
    BD.KEYW.SD.ENTR_CONVS = 0;
    BD.KEYW.SD.ENTR_ROI = 0.9;
    BD.TRANS_MAP_URL = "https://docs.google.com/spreadsheets/d/1H9PSOyvN2CNjM0p-5J-z5rMSq4lPcHJR1EO8v8WLr3M/edit#gid=0";
    BD.AD_PAUSER_URL = "https://docs.google.com/spreadsheets/d/1jkdlPXfJeFP_NLVX2piiSjyZkh-S5Zi4W0R1a2mX-XA/edit#gid=0";
    BD.BQ_PROJECT_ID = "fiery-aspect-165212";
    BD.JDBC = {};
    BD.JDBC.USER = "script-service";
    BD.JDBC.PASS = "5greenhorses";
    BD.JDBC.URL = {};
    BD.JDBC.URL.BASE = "jdbc:mysql://23.251.133.254:3306";
    BD.JDBC.URL.SCHEMA = {};
    BD.JDBC.URL.SCHEMA.LOG = "/black-hole";
    BD.TIMESTAMP = new TimestampService();
    BD.SITE.ID = "SITE";
    BD.SITE.KW = "carflexi";
    BD.NUMTOTT = {
        0: "p0",
        1: "p1",
        2: "p2",
        3: "p3",
        4: "m4",
        5: "m5",
        6: "n6",
        7: "n7",
        8: "n8",
        9: "n9"
    };
    BD.TIMESTAMP.automatorVersion(BD.VERSION);
    scheduller();
}
function scheduller() {
    var time = new Date();
    Logger.log("Day in Year: " + getDayInYear());
    Logger.log("UTC Hour: " + time.getUTCHours());
    var accName = AdWordsApp.currentAccount().getName();
    if (accName.indexOf("RAC") != -1 || accName.indexOf("HIRE") != -1) {
        time.setUTCHours(time.getUTCHours() - 1);
    } else if (accName.indexOf("RENTAL") != -1) {

    } else {
        time.setUTCHours(time.getUTCHours() + 1);
    }
    Logger.log("Modified UTC Hour: " + time.getUTCHours());
    if (time.getUTCHours() == 19) {
        clear();
    } else if (time.getUTCHours() == 20) {
        aaAccount();
        ssAccount();
        ccCampaign();
    } else if (time.getUTCHours() == 21) {
        aaCampaign();
        ssCampaign();
        aaAdgroup();
        ssAdgroup();
        sdAdgroup();
    } else if (time.getUTCHours() == 22) {
        aaKeyword();
        ssKeyword();
        sdKeyword();
    } else if (time.getUTCHours() == 23) {
        ttAccount();
        ttCampaign();
        ttAdgroup();
        ttKeyword();
    } else if (time.getUTCHours() == 0) {
        trfKeyword();
        cpKeyword();
        ksKeyword();
    } else if (time.getUTCHours() == 1) {
        bidder('trf', '1i');
    } else if (time.getUTCHours() == 2) {
        if ((getDayInYear() % 2) == 1) {
            bidder('trf', '2i');
        }
    } else if (time.getUTCHours() == 3) {
        if ((getDayInYear() % 3) == 1) {
            bidder('trf', '3i');
        }
    } else if (time.getUTCHours() == 4) {
        if ((getDayInYear() % 4) == 1) {
            bidder('trf', '4i');
        }
    } else if (time.getUTCHours() == 5) {
        if ((getDayInYear() % 5) == 1) {
            bidder('trf', '5i');
        }
    } else if (time.getUTCHours() == 6) {
        if ((getDayInYear() % 6) == 1) {
            bidder('trf', '6i');
        }
    } else if (time.getUTCHours() == 7) {
        if ((getDayInYear() % 5) == 1) {
            bidder('trf', '7i');
        }
    } else if (time.getUTCHours() == 8) {
        logingService();
    } else if (time.getUTCHours() == 9) {
        if ((getDayInYear() % 2) == 1) {
            complementaryBidder('tt', 'p');
        }
    } else if (time.getUTCHours() == 10) {
        if ((getDayInYear() % 3) == 1) {
            complementaryBidder('tt', 'm4');
        }
    } else if (time.getUTCHours() == 11) {
        if ((getDayInYear() % 4) == 1) {
            complementaryBidder('tt', 'm5');
        }
    } else if (time.getUTCHours() == 12) {
        if ((getDayInYear() % 5) == 1) {
            complementaryBidder('tt', 'n');
        }
    } else if (time.getUTCHours() == 13) {

    } else if (time.getUTCHours() == 14) {

    } else if (time.getUTCHours() == 15) {

    } else if (time.getUTCHours() == 16) {

    } else if (time.getUTCHours() == 17) {

    } else if (time.getUTCHours() == 18) {

    }
}

/**
 * Rounds a Number to two decimal digits.
 * 
 * @param {Number} num The Number to be rounded.
 * @returns {Number} The rounded number.
 */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

/**
 * Calculates how many days has passed since January 1st of the present year,
 * counting today in.
 * 
 * @returns {Number}
 */
function getDayInYear() {
    var date = new Date();
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = date.getUTCMonth();
    var dn = date.getUTCDate();
    var dayOfYear = dayCount[mn] + dn;
    if (mn > 1 && isLeapYear())
        dayOfYear++;
    return dayOfYear;
}

/**
 * Checks if the current year is a leap year.
 * 
 * @returns {Boolean}
 */
function isLeapYear() {
    var date = new Date();
    var year = date.getUTCFullYear();
    if ((year & 3) != 0)
        return false;
    return ((year % 100) != 0 || (year % 400) == 0);
}

Set = function (initialize) {
    this.storage = {};
    this.add = function (element) {
        this.storage[element] = true;
    };
    this.has = function (element) {
        return (element in this.storage);
    };
    if (initialize !== undefined)
        for (var i = 0; i < initialize.length; i++)
            this.add(initialize[i]);
};

Expression = function (left, operator, right) {
    this.left = left;
    this.right = right;
    this.operator = operator;
};

Expression.prototype.toSQL = function () {
    return '(' + this.left.toSQL() + ' ' + this.operator + ' ' + this.right.toSQL() + ')';
};

And = function (left, right) {
    Expression.call(this, left, 'and', right);
};
And.prototype = Object.create(Expression.prototype);
And.prototype.constructor = And;

Or = function (left, right) {
    Expression.call(this, left, 'or', right);
};

Or.prototype = Object.create(Expression.prototype);
Or.prototype.constructor = Or;

Not = function (expression) {
    Expression.call(this, expression, 'not', null);
};
Not.prototype = Object.create(Expression.prototype);
Not.prototype.constructor = Not;
Not.prototype.toSQL = function () {
    return '(' + this.operator + '(' + this.left.toSQL() + '))';
};

Comparison = function (left, operator, right) {
    var operators = new Set(['=', '<>', '<', '<=', '>', '>=', 'like']);
    if (!(operators.has(operator)))
        throw 'Comparison Error: Invalid operator';
    Expression.call(this, left.toString(), operator, right.toString());
};
Comparison.prototype = Object.create(Expression.prototype);
Comparison.prototype.constructor = Comparison;
Comparison.prototype.toSQL = function () {
    return '(' + this.left + ' ' + this.operator + ' ' + this.right + ')';
};

Like = function (left, right) {
    // Call the parent constructor
    var quote = (right.indexOf("'") > -1) ? '"' : "'";
    right = quote + '%' + right + '%' + quote;
    Comparison.call(this, left, 'like', right);
};
Like.prototype = Object.create(Comparison.prototype);
Like.prototype.constructor = Like;

BQ_Like = function (parameter, value) {
    // Call the parent constructor
    var left = 'parameter';
    var right = '&' + parameter + '=' + value;
    Like.call(this, left, right);
};
BQ_Like.prototype = Object.create(Like.prototype);
BQ_Like.prototype.constructor = BQ_Like;

/**
 * Handles the communication with BigQuery
 * @param {String} projectId The BigQuery project id
 * @param {String} datasetId The BigQuery dataset id
 * @param {String} tableId The BigQuery table id
 * @param {Array} tableSchema The BigQuery table schema
 */
BigQueryCore = function (projectId, datasetId, tableId, tableSchema) {
    /* ----- Class Methods Start Here ----- */

    /**
     * Sets the BigQuery project id
     * @param {String} projectId The BigQuery project Id
     */
    this.setProjectId = function (projectId) {
        this.projectId = (projectId !== undefined) ? projectId : null;
    };

    /**
     * Retrieves the BigQuery project id
     * Throws an error if project id is not set
     * @returns {String}
     */
    this.getProjectId = function () {
        if (this.projectId == null)
            throw "Project Id not set";
        return this.projectId;
    };

    /**
     * Sets the BigQuery dataset id
     * @param {String} datasetId The BigQuery dataset Id
     */
    this.setDatasetId = function (datasetId) {
        this.datasetId = (datasetId !== undefined) ? datasetId : null;
    };

    /**
     * Retrieves the BigQuery dataset id
     * Throws an error if dataset id is not set
     * @returns {String}
     */
    this.getDatasetId = function () {
        if (this.datasetId == null)
            throw "Dataset Id not set";
        return this.datasetId;
    };

    /**
     * Sets the BigQuery table id
     * @param {String} tableId The BigQuery table Id
     */
    this.setTableId = function (tableId) {
        this.tableId = (tableId !== undefined) ? tableId : null;
    };

    /**
     * Retrieves the BigQuery table id
     * Throws an error if table id is not set
     * @returns {String}
     */
    this.getTableId = function () {
        if (this.tableId == null)
            throw "Table Id not set";
        return this.tableId;
    };

    /**
     * Sets the BigQuery table schema
     * @param {Array} tableSchema The BigQuery table schema
     */
    this.setTableSchema = function (tableSchema) {
        this.tableSchema = (tableSchema !== undefined) ? tableSchema : null;
    };

    /**
     * Retrieves the BigQuery table schema
     * Throws an error if table schema is not set
     * @returns {Array}
     */
    this.getTableSchema = function () {
        if (this.tableSchema == null)
            throw "Table Schema not set";
        return this.tableSchema;
    };

    /**
     * Backs off a random amount of milliseconds
     * The back off time can exceed the maximum amount of milliseconds if triesCount > 1
     * @param {Integer} minSleep The minimum ammount of milliseconds to sleep
     * @param {Integer} maxSleep The maximum ammount of milliseconds to sleep
     * @param {Integer} lastOperationTimestamp The timestamp of the last operation
     * @param {Integer} triesCount The number of tries for the operation
     */
    this.backoff = function (minSleep, maxSleep, lastOperationTimestamp, triesCount) {
        if (lastOperationTimestamp == null)
            lastOperationTimestamp = Date.now();
        var timeDifference = parseInt(Date.now() - lastOperationTimestamp);
        var overhead = minSleep * triesCount - timeDifference;
        overhead = (overhead < 0) ? 0 : overhead;
        var backoff = overhead + parseInt(Math.random() * 10000 % (maxSleep - minSleep));
        this.debug && Logger.log("BigQueryCore.backoff: Sleeping " + backoff + " miliseconds");
        Utilities.sleep(backoff);
    };

    /**
     * Checks if the dataset exists
     * In order to avoid the "thundering heard" effect,
     * if dataset is not found, backs off and tries again
     * @returns {Boolean}
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get
     */
    this.datasetExists = function () {
        var projectId = this.getProjectId();
        var datasetId = this.getDatasetId();
        try {
            BigQuery.Datasets.get(projectId, datasetId);
            return true;
        } catch (e) {
            this.debug && Logger.log("BigQueryCore.datasetExists: Dataset " + projectId + ":" + datasetId + " not found. Trying again.");
            this.backoff(1000, 1500, null, 1);
            try {
                BigQuery.Datasets.get(projectId, datasetId);
                this.debug && Logger.log("BigQueryCore.datasetExists: Dataset " + projectId + ":" + datasetId + " found.");
                return true;
            } catch (e) {
                this.debug && Logger.log("BigQueryCore.datasetExists: Dataset " + projectId + ":" + datasetId + " not found. Returning.");
                return false;
            }
        }
    };

    /**
     * Creates the dataset if it doesn't exits
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert
     */
    this.datasetCreate = function () {
        var projectId = this.getProjectId();
        var datasetId = this.getDatasetId();
        if (!this.datasetExists()) {
            var dataSet = BigQuery.newDataset();
            dataSet.id = datasetId;
            dataSet.friendlyName = datasetId;
            dataSet.datasetReference = BigQuery.newDatasetReference();
            dataSet.datasetReference.projectId = projectId;
            dataSet.datasetReference.datasetId = datasetId;
            BigQuery.Datasets.insert(dataSet, projectId);
        }
    };

    /**
     * Checks if the table exists
     * In order to avoid the "thundering heard" effect,
     * if table is not found, backs off and tries again
     * @returns {Boolean}
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/get
     */
    this.exists = function () {
        var projectId = this.getProjectId();
        var datasetId = this.getDatasetId();
        var tableId = this.getTableId();
        try {
            BigQuery.Tables.get(projectId, datasetId, tableId);
            return true;
        } catch (e) {
            this.debug && Logger.log("BigQueryCore.exists: Table " + projectId + ":" + datasetId + "." + tableId + " not found. Trying again.");
            this.backoff(1000, 1500, null, 1);
            try {
                BigQuery.Tables.get(projectId, datasetId, tableId);
                this.debug && Logger.log("BigQueryCore.exists: Table " + projectId + ":" + datasetId + "." + tableId + " found.");
                return true;
            } catch (e) {
                this.debug && Logger.log("BigQueryCore.exists: Table " + projectId + ":" + datasetId + "." + tableId + " not found. Returning.");
                return false;
            }
        }
    };

    /**
     * Creates the table if it doesn't exits
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/insert
     * NEED TO ADD THE OPTION TO IGNORE THE EXISTS CHECK
     */
    this.create = function () {
        var projectId = this.getProjectId();
        var datasetId = this.getDatasetId();
        var tableId = this.getTableId();
        this.debug && Logger.log("BigQueryCore.create: Creating table " + projectId + ":" + datasetId + "." + tableId + ".");
        if (!this.exists()) {
            var table = {
                tableReference: {
                    projectId: projectId,
                    datasetId: datasetId,
                    tableId: tableId
                },
                schema: {
                    fields: this.getTableSchema()
                }
            };
            BigQuery.Tables.insert(table, projectId, datasetId);
        }
    };

    /**
     * Drops the table if it exits
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/delete
     * NEED TO ADD THE OPTION TO IGNORE THE EXISTS CHECK
     */
    this.drop = function () {
        this.debug && Logger.log("BigQueryCore.drop: Dropping table " + this.getProjectId() + ":" + this.getDatasetId() + "." + this.getTableId() + ".");
        if (this.exists()) {
            BigQuery.Tables.remove(this.getProjectId(), this.getDatasetId(), this.getTableId());
        }
    };

    /**
     * Truncates the table
     * CURRENTLY TRUNCATING THE TABLE BY DROPPING & RECREATING IT
     * NEEDS TO BE FIXED TO USE A SELECT QUERY WITH DESTINATION TABLE
     */
    this.truncate = function () {
        this.debug && Logger.log("BigQueryCore.drop: Truncating table " + this.getProjectId() + ":" + this.getDatasetId() + "." + this.getTableId() + ".");
        this.drop();
        this.create();
    };

    /**
     * Inserts a row to the Streaming Insertion Queue
     * Data is writen to BigQuery only when queue is full or commit is called
     * @param {String} rowData The BigQuery table Id
     * @param {String} primaryKey The BigQuery table Id
     */
    this.insert = function (rowData, primaryKey) {
        var row = BigQuery.newTableDataInsertAllRequestRows();
        if (primaryKey != null)
            row.insertId = primaryKey;
        row.json = rowData;
        this.streamedInsertsQueue.push(row);
        //this.debug&&Logger.log("BigQueryCore.insert: Row added in queue. Queue size: " + this.streamedInsertsQueue.length);
        if (this.streamedInsertsQueue.length >= this.streamedInsertsMaxQueueSize)
            this.commit();

    };

    /**
     * Writes the contents of the Streaming Insertion Queue to BigQuery
     * Before writing, it backs off a random amount of milliseconds
     * If writing fails, it backs off a random amount of milliseconds and tries again
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll
     */
    this.commit = function () {
        var insertRequest = BigQuery.newTableDataInsertAllRequest();
        insertRequest.rows = this.streamedInsertsQueue;
        if (insertRequest.rows.length > 0) {
            this.debug && Logger.log("BigQueryCore.commit: Inserting " + insertRequest.rows.length + " rows");
            var result;
            try {
                this.backoff(this.streamedInsertBackoff[0], this.streamedInsertBackoff[1], this.lastStreamedInsertTimestamp, 1);
                this.lastStreamedInsertTimestamp = Date.now();
                result = BigQuery.Tabledata.insertAll(insertRequest, this.getProjectId(), this.getDatasetId(), this.getTableId());
            } catch (e) {
                this.debug && Logger.log("BigQueryCore.commit: Insertion failed. Trying again.");
                this.backoff(this.streamedInsertBackoff[0], this.streamedInsertBackoff[1], this.lastStreamedInsertTimestamp, 2);
                this.lastStreamedInsertTimestamp = Date.now();
                result = BigQuery.Tabledata.insertAll(insertRequest, this.getProjectId(), this.getDatasetId(), this.getTableId());
            }
            if (result.insertErrors != null) {
                var allErrors = [];

                for (var i = 0; i < result.insertErrors.length; i++) {
                    var insertError = result.insertErrors[i];
                    allErrors.push(Utilities.formatString('Error inserting item: %s', insertError.index));

                    for (var j = 0; j < insertError.errors.length; j++) {
                        var error = insertError.errors[j];
                        allErrors.push(Utilities.formatString('- ' + error));
                    }
                }
                throw allErrors.join('\n');
            }
            this.streamedInsertsQueue = [];
        }
    };

    /**
     * Runs a query
     * Before runing the query it backs off a random amound of milliseconds
     * If the query fails, it backs off a random amount of milliseconds and tries again
     * @param {String} query The query
     * @returns {Array} the results of the query in BigQuery format
     * Documentation: https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
     */
    this.query = function (query) {
        var queryRequest = BigQuery.newQueryRequest();
        queryRequest.query = query;
        queryRequest.useQueryCache = false;
        var queryResult = null;
        try {
            this.debug && Logger.log("BigQueryCore.query: Running Query.");
            this.backoff(this.queryBackoff[0], this.queryBackoff[1], this.lastQueryTimestamp, 1);
            this.lastQueryTimestamp = parseInt(Date.now());
            queryResult = BigQuery.Jobs.query(queryRequest, this.getProjectId());
        } catch (e) {
            this.debug && Logger.log("BigQueryCore.query: Query failed. Trying again.");
            this.backoff(this.queryBackoff[0], this.queryBackoff[1], this.lastQueryTimestamp, 2);
            this.lastQueryTimestamp = parseInt(Date.now());
            queryResult = BigQuery.Jobs.query(queryRequest, this.getProjectId());
        }
        if (queryResult.jobComplete && parseInt(queryResult.totalRows) > 0) {
            this.debug && Logger.log("BigQueryCore.query: Query returned: " + queryResult.rows.length + " rows.");
            return queryResult.rows;
        }
        return [];
    };


    /**
     * Enables debugging
     */
    this.debugMode = function () {
        this.debug = true;
    };
    /* ----- Class Methods End Here ----- */


    /* ----- Constructor Starts Here ----- */
    this.projectId = null;
    this.datasetId = null;
    this.tableId = null;
    this.tableSchema = null;

    /**
     * The queue is used to control how many streamed inserts happen every second
     * There is a limitation of 10,000 streamed inserts per second per table
     * or 100,000 streamed inserts per second per project
     Documentation: https://cloud.google.com/bigquery/quota-policy#streaminginserts
     */
    this.streamedInsertsQueue = [];
    this.streamedInsertsMaxQueueSize = 500;
    this.streamedInsertBackoff = [1000, 1500];
    this.lastStreamedInsertTimestamp = parseInt(Date.now());

    /**
     * Randomizes the execution time of a query
     * There is a limitation of 50 concurent queries per project
     Documentation: https://cloud.google.com/bigquery/quota-policy#queries
     */
    this.queryBackoff = [0, 30000];
    this.lastQueryTimestamp = parseInt(Date.now());

    /**
     * Enables logging
     */
    this.debug = false;

    this.setProjectId(projectId);
    this.setDatasetId(datasetId);
    this.setTableId(tableId);
    this.setTableSchema(tableSchema);

    /**
     * Backs off a random amount of milliseconds in order to
     * randomize the startup time of the script
     */
    this.backoff(0, 10000, null, 1);
    /* ----- Constructor Ends Here ----- */

};

/**
 * Handles the keyword level parameters
 * @param {String} projectId The BigQuery project id
 * @param {String} tableId The BigQuery table id
 * @param {String} accountId The BigQuery table id
 * @param {String} datasetId The BigQuery dataset id
 * @param {Array} tableSchema The BigQuery table schema
 */
BigQueryKeywords = function (projectId, tableId, accountId, datasetId, tableSchema) {
    /* ----- Class Methods Start Here ----- */

    /**
     * Sets the AdWords Account CID
     * @param {String} accountId The AdWords Account CID
     */
    this.setAccountId = function (accountId) {
        this.accountId = (accountId !== undefined) ? accountId : null;
        ;
    };

    /**
     * Retrieves the AdWords Account CID
     * Throws an error if account id is not set
     * @returns {String}
     */
    this.getAccountId = function () {
        if (this.accountId == null)
            throw "Account Id not set";
        return this.accountId;
    };

    /**
     * Downloads all non removed keywords from AdWords
     * The purpose of this method is to download all keywords from AdWords
     * and add them in BigQuery (via the reset method)
     * This method is not currently used
     */
    this.loadFromAdWords = function () {
        // ADWORDSAPP
        var report = AdWordsApp.report("SELECT AdGroupId, Id FROM KEYWORDS_PERFORMANCE_REPORT WHERE CampaignStatus != REMOVED AND AdGroupStatus != REMOVED AND Status != REMOVED AND CampaignName DOES_NOT_CONTAIN 'ZZZ' DURING TODAY");
        var rows = report.rows();
        var timestamp = Math.floor(Date.now() / 1000);
        this.AdWordsData = {};
        while (rows.hasNext()) {
            var row = rows.next().formatForReport();
            this.AdWordsData[parseInt(row['AdGroupId']) + "#" + parseInt(row['Id'])] = "";
        }
    };

    /**
     * Transforms data to a BigQuery-friendly format
     * @param {Integer} adGroupId The ad group id
     * @param {Integer} keywordId The keyword id
     * @returns {Object} An object to be added via Streamed Insert
     */
    this.format = function (adGroupId, keywordId) {
        adGroupId = parseInt(adGroupId);
        keywordId = parseInt(keywordId);
        var key = adGroupId.toString() + "#" + keywordId.toString();
        var timestamp = Math.floor(Date.now() / 1000);
        return {"adgroup_id": adGroupId, "keyword_id": keywordId, "timestamp": timestamp, "parameter": this.BigQueryData[key]};
    };


    /**
     * Downloads all keywords from BigQuery
     */
    this.load = function () {
        var projectId = this.core.getProjectId();
        var queryRequest = BigQuery.newQueryRequest();
        var query = "SELECT a.adgroup_id, a.keyword_id, a.parameter";
        query += " FROM [" + projectId + ":" + this.core.getDatasetId() + "." + this.core.getTableId() + "] a INNER JOIN (";
        query += " SELECT adgroup_id, keyword_id, MAX(timestamp) timestamp";
        query += " FROM [" + projectId + ":" + this.core.getDatasetId() + "." + this.core.getTableId() + "]";
        query += " GROUP BY adgroup_id, keyword_id";
        query += ") b ON a.adgroup_id = b.adgroup_id AND a.keyword_id = b.keyword_id AND a.timestamp = b.timestamp";
        var queryRows = this.core.query(query);
        this.BigQueryData = {};
        for (var i = 0; i < queryRows.length; i++) {
            var row = queryRows[i];
            var adGroupId = parseInt(row.f[0].v);
            var keywordId = parseInt(row.f[1].v);
            var key = adGroupId.toString() + "#" + keywordId.toString();
            this.BigQueryData[key] = row.f[2].v;
        }
    };

    /**
     * Downloads all keywords from BigQuery based on an expression
     * @param {Object} expression
     */
    this.loadWithFilters = function (expression) {
        var projectId = this.core.getProjectId();
        var queryRequest = BigQuery.newQueryRequest();
        var query = "SELECT a.adgroup_id, a.keyword_id, a.parameter";
        query += " FROM [" + projectId + ":" + this.core.getDatasetId() + "." + this.core.getTableId() + "] a INNER JOIN (";
        query += " SELECT adgroup_id, keyword_id, MAX(timestamp) timestamp";
        query += " FROM [" + projectId + ":" + this.core.getDatasetId() + "." + this.core.getTableId() + "]";
        query += " GROUP BY adgroup_id, keyword_id";
        query += ") b ON a.adgroup_id = b.adgroup_id AND a.keyword_id = b.keyword_id AND a.timestamp = b.timestamp";
        query += " WHERE " + expression.toSQL();
        var queryRows = this.core.query(query);
        this.BigQueryData = {};
        for (var i = 0; i < queryRows.length; i++) {
            var row = queryRows[i];
            var adGroupId = parseInt(row.f[0].v);
            var keywordId = parseInt(row.f[1].v);
            var key = adGroupId.toString() + "#" + keywordId.toString();
            this.BigQueryData[key] = row.f[2].v;
        }
    };

    /**
     * Extracts Ad Group and Keyword Ids from loaded keywords
     * @param {Object} expression
     * @returns {Array} an array of arrays with the ids [adgroup_id, keyword_id]
     */
    this.extractIds = function (expression) {
        var ids = [];
        var keys = Object.keys(this.BigQueryData);
        for (var i = 0; i < keys.length; i++) {
            var keysArray = keys[i].split("#");
            ids.push(keysArray);
        }
        return ids;
    };


    /**
     * Retrieves the parameter of a specific keyword
     * @param {Integer} adGroupId The ad group id
     * @param {Integer} keywordId The keyword id
     * @returns {String} the parameter of the keyword (or undefined if parameter is not set)
     */
    this.getParameter = function (adGroupId, keywordId) {
        adGroupId = parseInt(adGroupId);
        keywordId = parseInt(keywordId);
        var key = adGroupId.toString() + "#" + keywordId.toString();
        if (!(key in this.BigQueryData))
            return undefined;
        return this.BigQueryData[key];
    };

    /**
     * Sets the parameter of a specific keyword
     * and stores it in BigQuery
     * @param {Integer} adGroupId The ad group id
     * @param {Integer} keywordId The keyword id
     * @param {String} parameter
     */
    this.setParameter = function (adGroupId, keywordId, parameter) {
        adGroupId = parseInt(adGroupId);
        keywordId = parseInt(keywordId);
        var key = adGroupId.toString() + "#" + keywordId.toString();
        var write = (key in this.BigQueryData) ? (this.BigQueryData[key] != parameter) : true;
        if (write) {
            this.BigQueryData[key] = parameter;
            var data = this.format(adGroupId, keywordId);
            this.core.insert(data);
        }
    };

    /**
     * Empties all keyword parameters in BigQuery
     * Not used: downoads all keywords from AdWords and stores them in BigQuery
     */
    this.reset = function () {
        // this.loadFromAdWords();
        keys = Object.keys(this.AdWordsData);
        for (var i = 0; i < keys.length; i++) {
            if (!(keys[i] in this.BigQueryData))
                this.BigQueryData[keys[i]] = "";
        }
        keys = Object.keys(this.BigQueryData);
        for (var i = 0; i < keys.length; i++) {
            keysArray = keys[i].split("#");
            this.BigQueryData[keys[i]] = "";
            var data = this.format(keysArray[0], keysArray[1]);
            this.core.insert(data);
        }
        this.core.commit();
    };

    /**
     * Stores all remaining information to BigQuery
     */
    this.close = function () {
        this.core.commit();
    };

    /**
     * Clears the BigQuery table
     */
    this.clear = function () {
        if (!this.core.datasetExists())
            this.core.datasetCreate();
        if (!this.core.exists())
            this.core.create();
        this.core.truncate();
    };

    /**
     * Enables debugging
     */
    this.debugMode = function () {
        this.core.debugMode();
    };
    /* ----- Class Methods End Here ----- */



    /* ----- Constructor Starts Here ----- */
    this.core = null;
    this.accountId = null;
    this.BigQueryData = {};
    this.AdWordsData = {};
    this.defaultTableSchema = [{name: 'adgroup_id', type: 'INTEGER'},
        {name: 'keyword_id', type: 'INTEGER'},
        {name: 'parameter', type: 'STRING'},
        {name: 'timestamp', type: 'TIMESTAMP'}];
    this.defaultTableId = "keyword";
    /* ADWORDSAPP */
    this.setAccountId((accountId === undefined) ? AdWordsApp.currentAccount().getCustomerId().replace(/\-/g, "") : datasetId);
    this.core = new BigQueryCore();
    this.core.setProjectId(projectId);
    this.core.setDatasetId((datasetId === undefined) ? this.getAccountId() : datasetId);
    this.core.setTableId((tableId === undefined) ? this.defaultTableId : tableId);
    this.core.setTableSchema((tableSchema === undefined) ? this.defaultTableSchema : tableSchema);
    this.core.debugMode();
    /* ----- Constructor Ends Here ----- */
};

/**
 * Logs a string with a timestamp.
 * 
 * @returns {null}
 */
function TimestampService() {

    /**
     * Stamps given Script name and comment with current time.
     * Stores them in db
     * 
     * @param {String} scriptName Name of the current function.
     * @param {String} comment Comment, description etc.
     * @returns {null}
     */
    this.stamp = function (scriptName, comment) {
        Logger.log(Utilities.formatDate(new Date(), "UTC", "z EEE yyyy.MM.dd-HH:mm:ss:SSS") + "\t" + comment + ": " + scriptName);
        var conn = Jdbc.getConnection(BD.JDBC.URL.BASE + BD.JDBC.URL.SCHEMA.LOG, BD.JDBC.USER, BD.JDBC.PASS);
        conn.setAutoCommit(false);
        var stmt = conn.prepareStatement('CALL insert_execlog(?, ?, ?, ?)');
        stmt.setLong(1, AdWordsApp.currentAccount().getCustomerId().replace(/-/g, ""));
        stmt.setString(2, scriptName);
        stmt.setString(3, comment);
        stmt.setString(4, AdWordsApp.getExecutionInfo().isPreview() ? 'PREVIEW' : 'LIVE');
        stmt.addBatch();
        stmt.executeBatch();
        conn.commit();
        conn.close();
    };

    /**
     * Stores the current version of the automator in the db.
     * Change BD.VERSION to change the version stored.
     * 
     * @param {String} version Version of the current automator.
     * @returns {null}
     */
    this.automatorVersion = function (version) {
        Logger.log("Automator Version: " + version);
        var conn = Jdbc.getConnection(BD.JDBC.URL.BASE + BD.JDBC.URL.SCHEMA.LOG, BD.JDBC.USER, BD.JDBC.PASS);
        conn.setAutoCommit(false);
        var stmt = conn.prepareStatement('CALL insert_automatorversion(?, ?)');
        stmt.setLong(1, AdWordsApp.currentAccount().getCustomerId().replace(/-/g, ""));
        stmt.setString(2, version);
        stmt.addBatch();
        stmt.executeBatch();
        conn.commit();
        conn.close();
    };
}

/**
 * Utility for formatting Dates in acceptable format for AWQL.
 * 
 * @returns {null}
 */
function AWQLDateFormatter() {

    /**
     * Formats a date represented as a string with month name etc, like
     * Wed, 1 Jun 2016 00:00:00 GMT. Returns in UTC time zone.
     * 
     * @param {String} imputDate A date in verbose format.
     * @returns {String} Date ready for AWQL During clause.
     */
    this.getStringByFullString = function (imputDate) {
        var sampleDate = new Date(imputDate);
        return Utilities.formatDate(sampleDate, "GMT", "yyyyMMdd");
    };
    /**
     * Formats a date in the past, given the days that past since today.
     * Returns in UTC time zone.
     * 
     * @param {Number} num Number of days in the past from today.
     * @returns {String} Date ready for AWQL During clause.
     */
    this.getStringByDaysBack = function (num) {
        var sampleDate = new Date();
        sampleDate.setUTCDate(sampleDate.getUTCDate() - num);
        return Utilities.formatDate(sampleDate, "GMT", "yyyyMMdd");
    };
    /**
     * Formats the present day.  Returns in UTC time zone.
     * 
     * @returns {String} Date ready for AWQL During clause.
     */
    this.getTodayAsString = function () {
        var sampleDate = new Date();
        sampleDate.setUTCHours(0, 0, 0, 0);
        return Utilities.formatDate(sampleDate, "GMT", "yyyyMMdd");
    };
}

/**
 * Handles all the kpi setting in the associated label for the Account level.
 * 
 * @returns {null}
 */
function AccountKpiSetter() {

    /**
     * The key to be set.
     * 
     * @type String
     */
    var key = null;
    /**
     * Sets the key element for this operation. Once set it is immutable.
     * Further attempts throw an exeption.
     * 
     * @param {String} arg The key.
     * @returns {null}
     */
    this.setKeyElement = function (arg) {
        if (key == null) {
            key = arg;
        } else {
            throw "AccountKpiSetter.key can be set only once!";
        }
    };
    /**
     * Gets the key element of this operation.
     * 
     * @returns {String} The key element.
     */
    this.getKeyElement = function () {
        return key;
    };
    /**
     * Adds or updates the Account label for the specified key. The key is
     * updated with the given value. Throws exeption if the key is not set.
     * 
     * @param {String} value The value for the key.
     * @returns {null}
     */
    this.addValue = function (value) {
        if (key == null) {
            throw "Null Pointer Exception";
        }
        var description = "";
        var newDescription = "";
        var newValue = "&" + key + "=" + value;
        var labelToCheck = AdWordsApp
                .labels()
                .withCondition("Name = '##Account#Attributes##'")
                .get();
        if (labelToCheck.hasNext()) {
            var label = labelToCheck.next();
            description = label.getDescription();
            if (description.indexOf("&" + key + "=") != -1) {
                if (description.indexOf(newValue) == -1) {
                    var re = new RegExp("([\[&]" + key + "=.*?)(?=&|\])");
                    newDescription = description.replace(re, newValue);
                    label.setDescription(newDescription);
                }
            } else if (description.indexOf("[") != -1
                    && description.indexOf("]") != -1) {
                newDescription = description.replace("[", "[" + newValue);
                label.setDescription(newDescription);
            } else if (description.indexOf("[") == -1
                    && description.indexOf("]") == -1) {
                newDescription = "[" + newValue + "]";
                label.setDescription(newDescription);
            } else {
                throw "Malformed key-value carrier";
            }
        } else {
            newDescription = "[" + newValue + "]";
            AdWordsApp.createLabel("##Account#Attributes##", newDescription);
        }
    };
}

/**
 * Handles all the kpi setting in the Campaign name.
 * 
 * @returns {nul}
 */
function CampaignKpiSetter() {

    /**
     * The key to be set.
     * 
     * @type String
     */
    var key = null;

    /**
     * Contains the Ids of the Campaigns in the queue.
     * 
     * @type Array
     */
    var idArray = [];

    /**
     * Contains the new values of the key, linked to their corresponding
     * Campaign.
     * 
     * @type Object
     */
    var actMap = {};

    /**
     * Sets the key element for this operation. Once set it is immutable.
     * Further attempts throw an exeption.
     * 
     * @param {String} arg The key.
     * @returns {null}
     */
    this.setKeyElement = function (arg) {
        if (key == null) {
            key = arg;
        } else {
            throw "CampaignKpiSetter.key can be set only once!";
        }
    };

    /**
     * Gets the key element of this operation.
     * 
     * @returns {String} The key element.
     */
    this.getKeyElement = function () {
        return key;
    };

    /**
     * Adds or updates the Campaign name for the specified key. The key is
     * updated with the given value.
     * 
     * @param {String} campaignId Id of the Campaign to update.
     * @param {String} value The value for the key.
     * @returns {null}
     */
    this.addAValue = function (campaignId, value) {
        idArray.push(campaignId);
        actMap[campaignId] = value;
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };

    /**
     * Returns the Ids and the values of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray,
            actMap: actMap
        };
    };

    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };

    /**
     * Commits the pending changes, and cleans the queue. Throws exeption if the
     * key is not set.
     * 
     * @returns {null}
     */
    this.flush = function () {
        if (key == null) {
            throw "Null Pointer Exception";
        }
        var campaigns = AdWordsApp
                .campaigns()
                .withIds(idArray)
                .get();
        while (campaigns.hasNext()) {
            var campaign = campaigns.next();
            var name = campaign.getName();
            var id = campaign.getId();
            var newValue = "&" + key + "=" + actMap[id];
            var newName = "";
            if (name.indexOf("&" + key + "=") != -1) {
                if (name.indexOf(newValue) == -1) {
                    var re = new RegExp("([\[&]" + key + "=.*?)(?=&|\])");
                    newName = name.replace(re, newValue);
                    campaign.setName(newName);
                }
            } else if (name.indexOf("[") != -1 && name.indexOf("]") != -1) {
                newName = name.replace("[", "[" + newValue);
                campaign.setName(newName);
            } else if (name.indexOf("[") == -1 && name.indexOf("]") == -1) {
                newName = "[" + newValue + "]" + name;
                campaign.setName(newName);
            } else {
                throw "Malformed key-value carrier";
            }
        }
        idArray = [];
        actMap = {};
    };

}

/**
 * Handles all the kpi setting in the AdGroup name.
 * 
 * @returns {null}
 */
function AdGroupKpiSetter() {

    /**
     * The key to be set.
     * 
     * @type String
     */
    var key = null;
    /**
     * Contains the Ids of the AdGroups in the queue.
     * 
     * @type Array
     */
    var idArray = [];
    /**
     * Contains the new values of the key, linked to their corresponding
     * AdGroup.
     * 
     * @type Object
     */
    var actMap = {};
    /**
     * Sets the key element for this operation. Once set it is immutable.
     * Further attempts throw an exeption.
     * 
     * @param {String} arg The key.
     * @returns {null}
     */
    this.setKeyElement = function (arg) {
        if (key == null) {
            key = arg;
        } else {
            throw "AdGroupKpiSetter.key can be set only once!";
        }
    };
    /**
     * Gets the key element of this operation.
     * 
     * @returns {String} The key element.
     */
    this.getKeyElement = function () {
        return key;
    };
    /**
     * Adds or updates the AdGroup name for the specified key. The key is
     * updated with the given value.
     * 
     * @param {String} adGroupId Id of the AdGroup to update.
     * @param {String} value The value for the key.
     * @returns {null}
     */
    this.addAValue = function (adGroupId, value) {
        idArray.push(adGroupId);
        actMap[adGroupId] = value;
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };
    /**
     * Returns the Ids and the values of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray,
            actMap: actMap
        };
    };
    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };
    /**
     * Commits the pending changes, and cleans the queue. Throws exeption if the
     * key is not set.
     * 
     * @returns {null}
     */
    this.flush = function () {
        if (key == null) {
            throw "Null Pointer Exception";
        }
        var adGroups = AdWordsApp
                .adGroups()
                .withIds(idArray)
                .get();
        while (adGroups.hasNext()) {
            var adGroup = adGroups.next();
            var name = adGroup.getName();
            var id = adGroup.getId();
            var newValue = "&" + key + "=" + actMap[id];
            var newName = "";
            if (name.indexOf("&" + key + "=") != -1) {
                if (name.indexOf(newValue) == -1) {
                    var re = new RegExp("([\[&]" + key + "=.*?)(?=&|\])");
                    newName = name.replace(re, newValue);
                    adGroup.setName(newName);
                }
            } else if (name.indexOf("[") != -1 && name.indexOf("]") != -1) {
                newName = name.replace("[", "[" + newValue);
                adGroup.setName(newName);
            } else if (name.indexOf("[") == -1 && name.indexOf("]") == -1) {
                newName = "[" + newValue + "]" + name;
                adGroup.setName(newName);
            } else {
                throw "Malformed key-value carrier";
            }
        }
        idArray = [];
        actMap = {};
    };
}

/**
 * Handles all the kpi setting in the Keyword Final Url.
 * 
 * @returns {null}
 */
function KeywordKpiSetter() {

    /**
     * The key to be set.
     * 
     * @type String
     */
    var key = null;
    /**
     * The Big Query Object.
     * 
     * @type Object
     */
    var bigQuery = null;
    /**
     * Contains pairs of AdGroup and Keyword Ids that are in queue.
     * 
     * @type Array
     */
    var idArray = [];
    /**
     * Contains the new values of the key, linked to their corresponding
     * Keyword.
     * 
     * @type Object
     */
    var actMap = {};
    /**
     * Sets the key element for this operation. Once set it is immutable.
     * Further attempts throw an exeption.
     * 
     * @param {String} arg The key.
     * @returns {null}
     */
    this.setKeyElement = function (arg) {
        if (key == null) {
            key = arg;
        } else {
            throw "KeywordKpiSetter.key can be set only once!";
        }
    };
    /**
     * Sets the Big Query Object. Once set it is immutable.
     * Further attempts throw an exeption.
     * 
     * @param {Object} arg The Big Query Object.
     * @returns {null}
     */
    this.setBQObject = function (arg) {
        if (bigQuery == null) {
            bigQuery = arg;
        } else {
            throw "KeywordKpiSetter.bigQuery can be set only once!";
        }
    };
    /**
     * Gets the key element of this operation.
     * 
     * @returns {String} The key element.
     */
    this.getKeyElement = function () {
        return key;
    };
    /**
     * Adds or updates the Keyword Final Urls for the specified key. The key is
     * updated with the given value.
     * 
     * @param {String} adGroupId Id of the AdGroup to update.
     * @param {String} keywordId Id of the Keyword to update.
     * @param {String} value The value for the key.
     * @returns {null}
     */
    this.addAValue = function (adGroupId, keywordId, value) {
        idArray.push([adGroupId, keywordId]);
        actMap[adGroupId + "#" + keywordId] = value;
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };
    /**
     * Returns the Ids and the values of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray,
            actMap: actMap
        };
    };
    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };
    /**
     * Commits the pending changes, and cleans the queue. Throws exeption if the
     * key is not set.
     * 
     * @returns {null}
     */
    this.flush = function () {
        if (key == null) {
            throw "Null Pointer Exception";
        }
        for (var i = 0; i < idArray.length; i++) {
            var kwId = idArray[i][1];
            var adGrId = idArray[i][0];
            var url = bigQuery.getParameter(adGrId, kwId);
            url = (url === undefined) ? "" : url;
            var newValue = "&" + key + "=" + actMap[adGrId + "#" + kwId];
            var newUrl = "";
            if (url.indexOf("&" + key + "=") != -1) {
                if (url.indexOf(newValue) == -1) {
                    var re = new RegExp("([&?]" + key + "=.*?)(?=&|$)");
                    newUrl = url.replace(re, newValue);
                    bigQuery.setParameter(adGrId, kwId, newUrl);
                }
            } else {
                newUrl = url + newValue;
                bigQuery.setParameter(adGrId, kwId, newUrl);
            }
        }
        idArray = [];
        actMap = {};
    };
}

/**
 * Handles all the keyword level bidding.
 * 
 * @returns {null}
 */
function KeywordBidder() {

    /**
     * Contains pairs of AdGroup and Keyword Ids that are in queue.
     * 
     * @type Array
     */
    var idArray = [];
    /**
     * Contains the new bids, linked to their corresponding Keyword.
     * 
     * @type Object.
     */
    var actMap = {};
    /**
     * Adds a bid change to the queue for the specified Keyword.
     *  
     * @param {String} adGroupId The Id of the AdGroup where the keyword is.
     * @param {String} keywordId The Id of the Keyword.
     * @param {Number} value The new bid.
     * @returns {null}
     */
    this.addAValue = function (adGroupId, keywordId, value) {
        idArray.push([adGroupId, keywordId]);
        actMap[adGroupId + "#" + keywordId] = value;
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };
    /**
     * Returns the Ids and the bids of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray,
            actMap: actMap
        };
    };
    /**
     * Returns the number of pending bid changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };
    /**
     * Commits the pending bid changes, and cleans the queue.
     * 
     * @returns {null}
     */
    this.flush = function () {
        var keywords = AdWordsApp
                .keywords()
                .withIds(idArray)
                .get();
        while (keywords.hasNext()) {
            var keyword = keywords.next();
            var kwId = keyword.getId();
            var adGrId = keyword.getAdGroup().getId();
            var newBid = actMap[adGrId + "#" + kwId];
            keyword.setMaxCpc(newBid);
        }
        idArray = [];
        actMap = {};
    };
}

/**
 * Handles all Campaign pausing.
 * 
 * @returns {null}
 */
function CampaignPauser() {

    /**
     * Contains the Ids of the Campaigns in the queue.
     * 
     * @type Array
     */
    var idArray = [];

    /**
     * Adds an AdGroup to be paused.
     * 
     * @param {String} campaignId The Id of the AdGroup where the Ad is.
     * @returns {null}
     */
    this.addAValue = function (campaignId) {
        idArray.push(campaignId);
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };

    /**
     * Returns the Ids of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray
        };
    };

    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };

    /**
     * Commits the pending changes, and cleans the queue.
     * 
     * @returns {null}
     */
    this.flush = function () {
        var campaigns = AdWordsApp
                .campaigns()
                .withIds(idArray)
                .get();
        while (campaigns.hasNext()) {
            var campaign = campaigns.next();
            campaign.pause();
        }
        idArray = [];
    };

}

/**
 * Handles all AdGroup pausing.
 * 
 * @returns {null}
 */
function AdGroupPauser() {

    /**
     * Contains the Ids of the AdGroups in the queue.
     * 
     * @type Array
     */
    var idArray = [];

    /**
     * Adds an AdGroup to be paused.
     * 
     * @param {String} adGroupId The Id of the AdGroup where the Ad is.
     * @returns {null}
     */
    this.addAValue = function (adGroupId) {
        idArray.push(adGroupId);
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };

    /**
     * Returns the Ids of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray
        };
    };

    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };

    /**
     * Commits the pending changes, and cleans the queue.
     * 
     * @returns {null}
     */
    this.flush = function () {
        var adgroups = AdWordsApp
                .adGroups()
                .withIds(idArray)
                .get();
        while (adgroups.hasNext()) {
            var adgroup = adgroups.next();
            adgroup.pause();
        }
        idArray = [];
    };

}

/**
 * Handles all Keyword pausing.
 * 
 * @returns {null}
 */
function KeywordPauser() {

    /**
     * Contains the Ids of the Keywords in the queue.
     * 
     * @type Array
     */
    var idArray = [];

    /**
     * Adds a Keyword to be paused.
     * 
     * @param {String} adGroupId The Id of the AdGroup where the Keyword is.
     * @param {String} keywordId The Id of the Keyword.
     * @returns {null}
     */
    this.addAValue = function (adGroupId, keywordId) {
        idArray.push([adGroupId, keywordId]);
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };

    /**
     * Returns the Ids of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray
        };
    };

    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };

    /**
     * Commits the pending changes, and cleans the queue.
     * 
     * @returns {null}
     */
    this.flush = function () {
        var keywords = AdWordsApp
                .keywords()
                .withIds(idArray)
                .get();
        while (keywords.hasNext()) {
            var keyword = keywords.next();
            keyword.pause();
        }
        idArray = [];
    };

}

/**
 * Handles all Ad pausing.
 * 
 * @returns {null}
 */
function AdPauser() {

    /**
     * Contains the Ids of the Ads in the queue.
     * 
     * @type Array
     */
    var idArray = [];

    /**
     * Adds an Ad to be paused.
     * 
     * @param {String} adGroupId The Id of the AdGroup where the Ad is.
     * @param {String} adId The Id of the Ad.
     * @returns {null}
     */
    this.addAValue = function (adGroupId, adId) {
        idArray.push([adGroupId, adId]);
        if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
            this.flush();
        }
    };

    /**
     * Returns the Ids of the pending changes.
     * 
     * @returns {Object}
     */
    this.getAllValues = function () {
        return {
            idArray: idArray
        };
    };

    /**
     * Returns the number of pending changes.
     * 
     * @returns {Number}
     */
    this.getPendingChanges = function () {
        return idArray.length;
    };

    /**
     * Commits the pending changes, and cleans the queue.
     * 
     * @returns {null}
     */
    this.flush = function () {
        var ads = AdWordsApp
                .ads()
                .withIds(idArray)
                .get();
        while (ads.hasNext()) {
            var ad = ads.next();
            ad.pause();
        }
        idArray = [];
    };

}

/**
 * Holds information about the kpis for Keywords, AdGoups, Campaigns or
 * Accounts.
 * 
 * @returns {null}
 */
function KpiExtractor() {

    /**
     * The Final Url, AdGroup Name, Campaign Name or Account Label Description
     * acting as a kpi carrier.
     * 
     * @type String
     */
    var container = null;
    /**
     * Kpi for aggregated roas, for geo Country, for short term period.
     * Applies to Campaigns only.
     * 
     * @type String
     */
    var cc = null;
    /**
     * Kpi representing roas for all time period.
     * Applies to Accounts, Campaigns, AdGroups and Keywords.
     * 
     * @type String
     */
    var aa = null;
    /**
     * Kpi representing roas for short term period.
     * Applies to Accounts, Campaigns, AdGroups and Keywords.
     * 
     * @type String
     */
    var ss = null;
    /**
     * Kpi representing the overall performance.
     * Applies to Accounts, Campaigns, AdGroups and Keywords.
     * 
     * @type String
     */
    var tt = null;
    /**
     * Kpi representing roas for very short term period.
     * Applies to AdGroups and Keywords.
     * 
     * @type String
     */
    var sd = null;
    /**
     * Kpi representing the calculated position.
     * Applies to Keywords only.
     * 
     * @type String
     */
    var cp = null;
    /**
     * Kpi identifying manual bonuses to bidding.
     * Applies to Keywords only.
     * 
     * @type String
     */
    var ks = null;
    /**
     * Kpi identifying traffic volume.
     * Applies to Keywords only.
     * 
     * @type String
     */
    var trf = null;
    /**
     * Sets the container and loads the respective kpis for use.
     * 
     * @param {String} text The carrier of kpis.
     * @returns {null}
     */
    this.loadContainer = function (text) {
        container = text;
        cc = null;
        aa = null;
        ss = null;
        tt = null;
        sd = null;
        cp = null;
        ks = null;
        trf = null;
        cc = container.match(/([&?]cc=.*?)(?=&|]|"|$)/);
        if (cc != null) {
            cc = cc[0].replace("&cc=", "");
        } else {
            cc = 'm4';
        }
        aa = container.match(/([&?]aa=.*?)(?=&|]|"|$)/);
        if (aa != null) {
            aa = aa[0].replace("&aa=", "");
        } else {
            aa = 'm4';
        }
        ss = container.match(/([&?]ss=.*?)(?=&|]|"|$)/);
        if (ss != null) {
            ss = ss[0].replace("&ss=", "");
        } else {
            ss = 'm4';
        }
        tt = container.match(/([&?]tt=.*?)(?=&|]|"|$)/);
        if (tt != null) {
            tt = tt[0].replace("&tt=", "");
        } else {
            tt = 'm4';
        }
        sd = container.match(/([&?]sd=.*?)(?=&|]|"|$)/);
        if (sd != null) {
            sd = sd[0].replace("&sd=", "");
        } else {
            sd = 'm4';
        }
        cp = container.match(/([&?]cp=.*?)(?=&|]|"|$)/);
        if (cp != null) {
            cp = cp[0].replace("&cp=", "");
            cp = parseFloat(cp);
        }
        ks = container.match(/([&?]ks=.*?)(?=&|]|"|$)/);
        if (ks != null) {
            ks = ks[0].replace("&ks=", "");
        }
        trf = container.match(/([&?]trf=.*?)(?=&|]|"|$)/);
        if (trf != null) {
            trf = trf[0].replace("&trf=", "");
        }
    };
    /**
     * Returns the loaded container.
     * 
     * @returns {String}
     */
    this.getContainer = function () {
        return container;
    };
    /**
     * Returns the current cc.
     * 
     * @returns {String}
     */
    this.getCC = function () {
        return cc;
    };
    /**
     * Checks whether the cc does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isCC = function (arg) {
        var result = null;
        if (cc != null) {
            (cc.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the cc does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotCC = function (arg) {
        var result = null;
        if (cc != null) {
            (cc.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current aa.
     * 
     * @returns {String}
     */
    this.getAA = function () {
        return aa;
    };
    /**
     * Checks whether the aa does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isAA = function (arg) {
        var result = null;
        if (aa != null) {
            (aa.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the aa does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotAA = function (arg) {
        var result = null;
        if (aa != null) {
            (aa.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current ss.
     * 
     * @returns {String}
     */
    this.getSS = function () {
        return ss;
    };
    /**
     * Checks whether the ss does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isSS = function (arg) {
        var result = null;
        var result = null;
        if (ss != null) {
            (ss.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the ss does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotSS = function (arg) {
        var result = null;
        if (ss != null) {
            (ss.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current tt.
     * 
     * @returns {String}
     */
    this.getTT = function () {
        return tt;
    };
    /**
     * Checks whether the tt does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isTT = function (arg) {
        var result = null;
        if (tt != null) {
            (tt.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the tt does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotTT = function (arg) {
        var result = null;
        if (tt != null) {
            (tt.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current sd.
     * 
     * @returns {String}
     */
    this.getSD = function () {
        return sd;
    };
    /**
     * Checks whether the sd does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isSD = function (arg) {
        var result = null;
        if (sd != null) {
            (sd.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the sd does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotSD = function (arg) {
        var result = null;
        if (sd != null) {
            (sd.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current cp.
     * 
     * @returns {String}
     */
    this.getCP = function () {
        return cp;
    };
    /**
     * Checks whether the cp is null.
     * 
     * @returns {Boolean}
     */
    this.hasCP = function () {
        var result = null;
        if (cp != null) {
            result = true;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks if cp is greater than the input provided.
     * 
     * @param {Number} arg The number to compare.
     * @returns {Boolean}
     */
    this.isCPgt = function (arg) {
        var result = null;
        if (cp != null) {
            cp > arg ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks if cp is less than the input provided.
     * 
     * @param {Number} arg The number to compare.
     * @returns {Boolean}
     */
    this.isCPlt = function (arg) {
        var result = null;
        if (cp != null) {
            cp < arg ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks if cp is greater or equal than the input provided.
     * 
     * @param {Number} arg The number to compare.
     * @returns {Boolean}
     */
    this.isCPgtoe = function (arg) {
        var result = null;
        if (cp != null) {
            cp >= arg ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks if cp is less or equal than the input provided.
     * 
     * @param {Number} arg The number to compare.
     * @returns {Boolean}
     */
    this.isCPltoe = function (arg) {
        var result = null;
        if (cp != null) {
            cp <= arg ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current ks.
     * 
     * @returns {String}
     */
    this.getKS = function () {
        return ks;
    };
    /**
     * Checks whether the ks does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isKS = function (arg) {
        var result = null;
        if (ks != null) {
            (ks.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the ks does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotKS = function (arg) {
        var result = null;
        if (ks != null) {
            (ks.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Returns the current trf.
     * 
     * @returns {String}
     */
    this.getTRF = function () {
        return trf;
    };
    /**
     * Checks whether the trf does match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isTRF = function (arg) {
        var result = null;
        if (trf != null) {
            (trf.indexOf(arg) != -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
    /**
     * Checks whether the trf does not match the input provided.
     * 
     * @param {String} arg The kpi to compare.
     * @returns {Boolean}
     */
    this.isNotTRF = function (arg) {
        var result = null;
        if (trf != null) {
            (trf.indexOf(arg) == -1) ? result = true : result = false;
        } else {
            result = false;
        }
        return result;
    };
}

/**
 * Holds information about the geo Ids in Campaigns and AdGroups.
 * 
 * @returns {null}
 */
function GeoExtractor() {

    /**
     * The  AdGroup Name or Campaign Name acting as a geo carrier.
     * 
     * @type String
     */
    var container = null;
    /**
     * Geo id for country in BO.
     * @type String
     */
    var country = null;
    /**
     * Geo id for region in BO.
     * @type String
     */
    var region = null;
    /**
     * Geo id for location in BO.
     * @type String
     */
    var location = null;
    /**
     * Sets the container and loads the respective geos for use.
     * 
     * @param {String} text The carrier of kpis.
     * @returns {null}
     */
    this.loadContainer = function (text) {
        container = text;
        country = null;
        region = null;
        location = null;
        country = container.match(/\$C[0-9]*\$/);
        if (country != null) {
            country = country[0];
        }
        region = container.match(/\$R[0-9]*\$/);
        if (region != null) {
            region = region[0];
        }
        location = container.match(/\$L[0-9]*\$/);
        if (location != null) {
            location = location[0];
        }
    };
    /**
     * Returns the loaded container.
     * 
     * @returns {String}
     */
    this.getContainer = function () {
        return container;
    };
    /**
     * Returns the current country geo.
     * 
     * @returns {String}
     */
    this.getCountry = function () {
        return country;
    };
    /**
     * Returns the current region geo.
     * 
     * @returns {String}
     */
    this.getRegion = function () {
        return region;
    };
    /**
     * Returns the current location geo.
     * 
     * @returns {String}
     */
    this.getLocation = function () {
        return location;
    };
}

/**
 * Creates ready to use AWQL Queries
 * 
 * @returns {null}
 */
function AWQLQueryBuilder() {

    /**
     * List of all the columns in the report.
     * 
     * @type Array
     */
    var selectAttributes = [];
    /**
     * The report type.
     * 
     * @type String
     */
    var reportType = "";
    /**
     * The conditions on which the report is created.
     * 
     * @type Array
     */
    var whereConditions = [];
    /**
     * The date range for the report.
     * @type Array
     */
    var duringDates = [2];
    /**
     * Creates the query and resets object for a new query.
     * 
     * @returns {String}
     */
    this.buildQuery = function () {
        var query = ["SELECT " + selectAttributes.join(", "),
            "FROM " + reportType,
            "WHERE " + whereConditions.join(" AND "),
            "DURING " + duringDates.join(", ")].join(" ");
        selectAttributes = [];
        reportType = "";
        whereConditions = [];
        duringDates = [2];
        return query;
    };
    /**
     * Ads another atribute to be reported.
     * 
     * @param {String} attribute A single attribute.
     * @returns {null}
     */
    this.addAttribute = function (attribute) {
        selectAttributes.push(attribute);
    };
    /**
     * Sets the report type.
     * 
     * @param {String} report The report type.
     * @returns {nul}
     */
    this.setReportType = function (report) {
        reportType = report;
    };
    /**
     * Adds a filtering layer in the report.
     * 
     * @param {String} condition A single filter.
     * @returns {null}
     */
    this.addCondition = function (condition) {
        whereConditions.push(condition);
    };
    /**
     * Sets the starting date.
     * 
     * @param {String} startDate The starting date.
     * @returns {null}
     */
    this.setStartDate = function (startDate) {
        duringDates[0] = startDate;
    };
    /**
     * Sets the ending date.
     * 
     * @param {String} endDate The ending date.
     * @returns {null}
     */
    this.setEndDate = function (endDate) {
        duringDates[1] = endDate;
    };
}

/**
 * Cleans Campaign or AdGroup Names from a set of kpis.
 * 
 * @returns {null}
 */
function CleaningService() {

    /**
     * The kpis to be cleaned.
     * 
     * @type Array
     */
    var kpis = [];

    /**
     * Formats the dates for the reports required in CleaningService.
     * 
     * @type AWQLDateFormatter
     */
    var dateFormater = new AWQLDateFormatter();

    /**
     * Builds the reports in CleaningService.
     * 
     * @type AWQLQueryBuilder
     */
    var awqlBuilder = new AWQLQueryBuilder();

    /**
     * Ads a kpi for this operation.
     * 
     * @param {String} kpi The kpis.
     * @returns {null}
     */
    this.addKpi = function (kpi) {
        kpis.push(kpi);
    };

    /**
     * Cleans the Campaign Names from the specified kpis and their values.
     * 
     * @returns {null}
     */
    this.cleanCampaigns = function () {
        if (kpis.length == 0) {
            throw "Null Pointer Exception";
        }
        var campaignCleaningExecutor = new CampaignKpiCleaner();
        campaignCleaningExecutor.setKpisElement(kpis);
        awqlBuilder.addAttribute("CampaignId");
        awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.setStartDate(dateFormater.getTodayAsString());
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var campId = item.CampaignId;
            campaignCleaningExecutor.cleanAValue(campId);
        }
        campaignCleaningExecutor.flush();
    };

    /**
     * Cleans the AdGroup Names from the specified kpis and their values.
     * 
     * @returns {null}
     */
    this.cleanAdGroups = function () {
        if (kpis.length == 0) {
            throw "Null Pointer Exception";
        }
        var adGroupCleaningExecutor = new AdGroupKpiCleaner();
        adGroupCleaningExecutor.setKpisElement(kpis);
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.setStartDate(dateFormater.getTodayAsString());
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var adGrId = item.AdGroupId;
            adGroupCleaningExecutor.cleanAValue(adGrId);
        }
        adGroupCleaningExecutor.flush();
    };

    /**
     * Handles all the kpi cleaning in the Campaign name.
     * 
     * @returns {null}
     */
    function CampaignKpiCleaner() {

        /**
         * The kpis to be cleaned.
         * 
         * @type Array
         */
        var kpis = null;

        /**
         * Contains the Ids of the Campaigns in the queue.
         * 
         * @type Array
         */
        var idArray = [];

        /**
         * Sets the kpis element for this operation. Once set it is immutable.
         * Further attempts throw an exeption.
         * 
         * @param {Array} arg The kpis.
         * @returns {null}
         */
        this.setKpisElement = function (arg) {
            if (kpis == null) {
                kpis = arg;
            } else {
                throw "CampaignKpiCleaner.kpis can be set only once!";
            }
        };

        /**
         * Gets the kpis element of this operation.
         * 
         * @returns {Array} The kpis element.
         */
        this.getKpisElement = function () {
            return kpis;
        };

        /**
         * Cleans the Campaign Name from the specified kpis and their values.
         * 
         * @param {String} campaignId Id of the Campaign to clean.
         * @returns {null}
         */
        this.cleanAValue = function (campaignId) {
            idArray.push(campaignId);
            if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
                this.flush();
            }
        };

        /**
         * Returns the Ids and the values of the pending changes.
         * 
         * @returns {Object}
         */
        this.getAllValues = function () {
            return {
                idArray: idArray
            };
        };

        /**
         * Returns the number of pending changes.
         * 
         * @returns {Number}
         */
        this.getPendingChanges = function () {
            return idArray.length;
        };

        /**
         * Commits the pending changes, and cleans the queue. Throws exeption if the
         * kpis are not set.
         * 
         * @returns {null}
         */
        this.flush = function () {
            if (kpis == null) {
                throw "Null Pointer Exception";
            }
            var campaigns = AdWordsApp
                    .campaigns()
                    .withIds(idArray)
                    .get();
            while (campaigns.hasNext()) {
                var campaign = campaigns.next();
                var name = campaign.getName();
                var newName = name;
                for (var i in kpis) {
                    var re = new RegExp("([&?]" + kpis[i] + "=.*?)(?=&|]|\"|$)");
                    newName = newName.replace(re, "");
                }
                campaign.setName(newName);
            }
            idArray = [];
        };

    }

    /**
     * Handles all the kpi cleaning in the AdGroup name.
     * 
     * @returns {null}
     */
    function AdGroupKpiCleaner() {

        /**
         * The kpis to be cleaned.
         * 
         * @type Array
         */
        var kpis = null;

        /**
         * Contains the Ids of the AdGroups in the queue.
         * 
         * @type Array
         */
        var idArray = [];

        /**
         * Sets the kpis element for this operation. Once set it is immutable.
         * Further attempts throw an exeption.
         * 
         * @param {Array} arg The kpis.
         * @returns {null}
         */
        this.setKpisElement = function (arg) {
            if (kpis == null) {
                kpis = arg;
            } else {
                throw "AdGroupKpiCleaner.kpis can be set only once!";
            }
        };

        /**
         * Gets the kpis element of this operation.
         * 
         * @returns {Array} The kpis element.
         */
        this.getKpisElement = function () {
            return kpis;
        };

        /**
         * Cleans the AdGroup Name from the specified kpis and their valuea.
         * 
         * @param {String} adGroupId Id of the AdGroup to clean.
         * @returns {null}
         */
        this.cleanAValue = function (adGroupId) {
            idArray.push(adGroupId);
            if (this.getPendingChanges() >= BD.CHANGES_PAGESIZE) {
                this.flush();
            }
        };

        /**
         * Returns the Ids and the values of the pending changes.
         * 
         * @returns {Object}
         */
        this.getAllValues = function () {
            return {
                idArray: idArray
            };
        };

        /**
         * Returns the number of pending changes.
         * 
         * @returns {Number}
         */
        this.getPendingChanges = function () {
            return idArray.length;
        };

        /**
         * Commits the pending changes, and cleans the queue. Throws exeption if the
         * kpis are not set.
         * 
         * @returns {null}
         */
        this.flush = function () {
            if (kpis == null) {
                throw "Null Pointer Exception";
            }
            var adGroups = AdWordsApp
                    .adGroups()
                    .withIds(idArray)
                    .get();
            while (adGroups.hasNext()) {
                var adGroup = adGroups.next();
                var name = adGroup.getName();
                var newName = name;
                for (var i in kpis) {
                    var re = new RegExp("([&?]" + kpis[i] + "=.*?)(?=&|]|\"|$)");
                    newName = newName.replace(re, "");
                }
                adGroup.setName(newName);
            }
            idArray = [];
        };

    }

}

function clear() {
    BD.TIMESTAMP.stamp('clearBQ', 'Started');
    var myBQ = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    myBQ.clear();
    BD.TIMESTAMP.stamp('clearBQ', 'Finished');
    BD.TIMESTAMP.stamp('CleaningService', 'Started');
    var cleaner = new CleaningService();
    cleaner.addKpi("aa");
    cleaner.addKpi("ss");
    cleaner.addKpi("sd");
    cleaner.addKpi("tt");
    cleaner.addKpi("cc");
    BD.TIMESTAMP.stamp('cleaning Campaigns', 'Started');
    cleaner.cleanCampaigns();
    BD.TIMESTAMP.stamp('cleaning Campaigns', 'Finished');
    BD.TIMESTAMP.stamp('cleaning AdGroups', 'Started');
    cleaner.cleanAdGroups();
    BD.TIMESTAMP.stamp('cleaning AdGroups', 'Finished');
    BD.TIMESTAMP.stamp('CleaningService', 'Finished');
}

function adPauser() {
    BD.TIMESTAMP.stamp('Ad Pauser', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var ruleArray = SpreadsheetApp.openByUrl(BD.AD_PAUSER_URL)
            .getSheetByName("ControlSheet").getRange("A:E").getValues();
    var rules = [];
    for (var i = 1; i < ruleArray.length; i++) {
        if (ruleArray[i][4] == "pause") {
            rules.push([ruleArray[i][0], ruleArray[i][1], ruleArray[i][2],
                ruleArray[i][3]]);
        }
    }
    var adgroupKpi = new KpiExtractor();
    var pauseExecutor = new AdPauser();
    awqlBuilder.addAttribute("Id");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("Impressions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Ctr");
    awqlBuilder.setReportType("AD_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("Status != DISABLED");
    awqlBuilder.addCondition("Impressions > 0");
    awqlBuilder.addCondition("AdType = 'EXPANDED_TEXT_AD'");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var adId = item.Id;
        var adGrId = item.AdGroupId;
        var adrgName = item.AdGroupName;
        adgroupKpi.loadContainer(adrgName);
        var impressions = roundToTwo(parseFloat((item.Impressions)
                .replace(/,/g, "")));
        var ctr = roundToTwo(parseFloat((item.Ctr).replace(/,/g, "")));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totValue = regValue + assValue * BD.AD.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "n9";
        if (roi <= BD.N9) {
            rNum = "n9";
        } else if (roi <= BD.N8) {
            rNum = "n8";
        } else if (roi <= BD.N7) {
            rNum = "n7";
        } else if (roi <= BD.N6) {
            rNum = "n6";
        } else if (roi <= BD.M5) {
            rNum = "m5";
        } else if (roi <= BD.M4) {
            rNum = "m4";
        } else if (roi <= BD.P3) {
            rNum = "p3";
        } else if (roi <= BD.P2) {
            rNum = "p2";
        } else if (roi <= BD.P1) {
            rNum = "p1";
        } else if (roi > BD.P0) {
            rNum = "p0";
        }
        for (var i in rules) {
            if (adgroupKpi.isTT(rules[i][0]) && rules[i][1].indexOf(rNum) != -1
                    && impressions >= rules[i][2] && ctr <= rules[i][3]) {
                pauseExecutor.addAValue(adGrId, adId);
                break;
            }
        }
    }
    pauseExecutor.flush();
    BD.TIMESTAMP.stamp('Ad Pauser', 'Finished');
}
function keywordPauser() {
    BD.TIMESTAMP.stamp('keywordPauser', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var pauser = new KeywordPauser();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.loadWithFilters(new And(new BQ_Like('tt', 'n'), new And(new BQ_Like('aa', 'n'),
            new And(new BQ_Like('ss', 'n'), new BQ_Like('sd', 'n')))));
    var allIds = bigQuery.extractIds();
    var tempArray = [];
    while (allIds.length > 0) {
        if (allIds.length > BD.CHANGES_PAGESIZE) {
            tempArray = allIds.splice(0, BD.CHANGES_PAGESIZE);
        } else {
            tempArray = allIds.splice(0, allIds.length);
        }
        var kIds = [];
        var aIds = [];
        for (var i in tempArray) {
            aIds[i] = tempArray[i][0];
            kIds[i] = tempArray[i][1];
        }
        awqlBuilder.addAttribute("Id");
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.addAttribute("Cost");
        awqlBuilder.addAttribute("AllConversions");
        awqlBuilder.addAttribute("ClickAssistedConversions");
        awqlBuilder.addAttribute("AllConversionValue");
        awqlBuilder.addAttribute("ClickAssistedConversionValue");
        awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("AdGroupId IN [" + aIds + "]");
        awqlBuilder.addCondition("Id IN [" + kIds + "]");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("Status != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.addCondition("Cost > 75");
        awqlBuilder.addCondition("Clicks > 50");
        awqlBuilder.setStartDate(dateFormater.getStringByFullString(BD.ALL_TIME));
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var kwId = item.Id;
            var adGrId = item.AdGroupId;
            var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
            var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
            var assConv = parseFloat((item.ClickAssistedConversions).replace(/,/g, ""));
            var totConv = regConv + assConv;
            var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
            var assValue = parseFloat((item.ClickAssistedConversionValue).replace(/,/g, ""));
            var totValue = regValue + assValue;
            if (cost == 0 && totValue > 0) {
                cost = 0.01;
            }
            var roi = roundToTwo(totValue / cost);
            if (totConv < 2 && roi <= 0.25) {
                pauser.addAValue(adGrId, kwId);
            }
        }
    }
    pauser.flush();
    BD.TIMESTAMP.stamp('keywordPauser', 'Finished');
}
function adgroupPauser() {
    BD.TIMESTAMP.stamp('adgroupPauser', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var pauser = new AdGroupPauser();
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("AdGroupName CONTAINS '&tt=n'");
    awqlBuilder.addCondition("AdGroupName CONTAINS '&aa=n'");
    awqlBuilder.addCondition("AdGroupName CONTAINS '&ss=n'");
    awqlBuilder.addCondition("AdGroupName CONTAINS '&sd=n'");
    awqlBuilder.addCondition("Cost > 170");
    awqlBuilder.addCondition("Clicks > 105");
    awqlBuilder.setStartDate(dateFormater.getStringByFullString(BD.ALL_TIME));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.AdGroupId;
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions).replace(/,/g, ""));
        var totConv = regConv + assConv;
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue).replace(/,/g, ""));
        var totValue = regValue + assValue;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        if (totConv < 3 && roi <= 0.25) {
            pauser.addAValue(id);
        }
    }
    pauser.flush();
    BD.TIMESTAMP.stamp('adgroupPauser', 'Finished');
}
function campaignPauser() {
    BD.TIMESTAMP.stamp('campaignPauser', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var pauser = new CampaignPauser();
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("CampaignName CONTAINS '&tt=n'");
    awqlBuilder.addCondition("CampaignName CONTAINS '&aa=n'");
    awqlBuilder.addCondition("CampaignName CONTAINS '&ss=n'");
    awqlBuilder.addCondition("Cost > 220");
    awqlBuilder.addCondition("Clicks > 220");
    awqlBuilder.setStartDate(dateFormater.getStringByFullString(BD.ALL_TIME));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions).replace(/,/g, ""));
        var totConv = regConv + assConv;
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue).replace(/,/g, ""));
        var totValue = regValue + assValue;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        if (totConv < 4 && roi <= 0.25) {
            pauser.addAValue(id);
        }
    }
    pauser.flush();
    BD.TIMESTAMP.stamp('campaignPauser', 'Finished');
}
function ccCampaign() {
    BD.TIMESTAMP.stamp('ccCampaign', 'Started');
    if (AdWordsApp.currentAccount().getName().indexOf("@GENERIC") != -1) {
        return 0;
    }
    var entity = "CAMP";
    var type = "CC";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var accountKpi = new KpiExtractor();
    var labelToCheck = AdWordsApp
            .labels()
            .withCondition("Name = '##Account#Attributes##'")
            .get();
    if (labelToCheck.hasNext()) {
        var label = labelToCheck.next();
        var description = label.getDescription();
        accountKpi.loadContainer(description);
    }
    var changesExecutor = new CampaignKpiSetter();
    changesExecutor.setKeyElement("cc");
    var countryMap = {};
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN '$C0$'");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.MONTH));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        var name = item.CampaignName;
        var country = name.match(/\$C[0-9]*\$/);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        if (countryMap[country[0]] != null) {
            countryMap[country[0]]["clicks"] += clicks;
            countryMap[country[0]]["cost"] += cost;
            countryMap[country[0]]["regConv"] += regConv;
            countryMap[country[0]]["assConv"] += assConv;
            countryMap[country[0]]["regValue"] += regValue;
            countryMap[country[0]]["assValue"] += assValue;
            countryMap[country[0]]["campaigns"].push(id);
        } else {
            countryMap[country[0]] = {
                "clicks": 0,
                "cost": 0,
                "regConv": 0,
                "assConv": 0,
                "regValue": 0,
                "assValue": 0,
                "totConv": 0,
                "totValue": 0,
                "roi": 0,
                "rNum": "er",
                "campaigns": []
            };
            countryMap[country[0]]["clicks"] += clicks;
            countryMap[country[0]]["cost"] += cost;
            countryMap[country[0]]["regConv"] += regConv;
            countryMap[country[0]]["assConv"] += assConv;
            countryMap[country[0]]["regValue"] += regValue;
            countryMap[country[0]]["assValue"] += assValue;
            countryMap[country[0]]["campaigns"].push(id);
        }
    }
    for (var key in countryMap) {
        countryMap[key]["totConv"] = countryMap[key]["regConv"]
                + countryMap[key]["assConv"] * BD.CAMP.ASSISTED_COEFF;
        countryMap[key]["totValue"] = countryMap[key]["regValue"]
                + countryMap[key]["assValue"] * BD.CAMP.ASSISTED_COEFF;
        if (countryMap[key]["cost"] == 0 && countryMap[key]["totValue"] > 0) {
            countryMap[key]["cost"] = 0.01;
        }
        countryMap[key]["roi"] = roundToTwo(countryMap[key]["totValue"] /
                countryMap[key]["cost"]);
        if (countryMap[key]["clicks"] > BD[entity][type].ROI_CLICKS) {
            if (countryMap[key]["roi"] <= BD.N9) {
                countryMap[key]["rNum"] = "n9";
            } else if (countryMap[key]["roi"] <= BD.N8) {
                countryMap[key]["rNum"] = "n8";
            } else if (countryMap[key]["roi"] <= BD.N7) {
                countryMap[key]["rNum"] = "n7";
            } else if (countryMap[key]["roi"] <= BD.N6) {
                countryMap[key]["rNum"] = "n6";
            } else if (countryMap[key]["roi"] <= BD.M5) {
                countryMap[key]["rNum"] = "m5";
            } else if (countryMap[key]["roi"] <= BD.M4) {
                countryMap[key]["rNum"] = "m4";
            } else if (countryMap[key]["roi"] <= BD.P3) {
                countryMap[key]["rNum"] = "p3";
            } else if (countryMap[key]["roi"] <= BD.P2) {
                countryMap[key]["rNum"] = "p2";
            } else if (countryMap[key]["roi"] <= BD.P1) {
                countryMap[key]["rNum"] = "p1";
            } else if (countryMap[key]["roi"] > BD.P0) {
                countryMap[key]["rNum"] = "p0";
            }
        } else if (countryMap[key]["totConv"] > BD[entity][type].ENTR_CONVS) {
            if (countryMap[key]["roi"] <= BD.N6
                    && (accountKpi.isAA('m') || accountKpi.isAA('n'))) {
                countryMap[key]["rNum"] = "m5";
            } else if (countryMap[key]["roi"] <= BD.N6
                    && accountKpi.isAA('p')) {
                countryMap[key]["rNum"] = "p3";
            } else if (countryMap[key]["roi"] <= BD.M4) {
                countryMap[key]["rNum"] = "p3";
            } else if (countryMap[key]["roi"] > BD.M4) {
                countryMap[key]["rNum"] = "p2";
            }
        } else if (countryMap[key]["clicks"] > BD[entity][type].ENTR_CLICKS
                && countryMap[key]["roi"] == 0 && accountKpi.isAA('n')) {
            countryMap[key]["rNum"] = "n6";
        } else if (countryMap[key]["clicks"] > BD[entity][type].ENTR_CLICKS
                && countryMap[key]["roi"] == 0
                && (accountKpi.isAA('p') || accountKpi.isAA('m'))) {
            countryMap[key]["rNum"] = "m5";
        } else if (countryMap[key]["cost"] > 0
                && countryMap[key]["totConv"] == 0 && accountKpi.isAA('p')) {
            countryMap[key]["rNum"] = "p3";
        } else if (countryMap[key]["cost"] > 0
                && countryMap[key]["totConv"] == 0
                && (accountKpi.isAA('m') || accountKpi.isAA('n'))) {
            countryMap[key]["rNum"] = "m5";
        } else if (countryMap[key]["cost"] == 0 && accountKpi.isAA('p0')) {
            countryMap[key]["rNum"] = "p1";
        } else if (countryMap[key]["cost"] == 0 && accountKpi.isAA('p1')) {
            countryMap[key]["rNum"] = "p2";
        } else if (countryMap[key]["cost"] == 0
                && (accountKpi.isAA('p2') || accountKpi.isAA('p3'))) {
            countryMap[key]["rNum"] = "p3";
        } else if (countryMap[key]["cost"] == 0 && accountKpi.isAA('m4')) {
            countryMap[key]["rNum"] = "m4";
        } else if (countryMap[key]["cost"] == 0
                && (accountKpi.isAA('m5') || accountKpi.isAA('n'))) {
            countryMap[key]["rNum"] = "n6";
        } else {
            countryMap[key]["rNum"] = "m4";
        }
        for (var i in countryMap[key]["campaigns"]) {
            changesExecutor.addAValue(countryMap[key]["campaigns"][i],
                    countryMap[key]["rNum"]);
        }
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('ccCampaign', 'Finished');
}
function aaKeyword() {
    BD.TIMESTAMP.stamp('aaKeyword', 'Started');
    var entity = "KEYW";
    var type = "AA";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var adgroupKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.load();
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("aa");
    changesExecutor.setBQObject(bigQuery);
    awqlBuilder.addAttribute("Id");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("Status != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("Impressions >= 1");
    awqlBuilder.addCondition("AveragePosition > 0");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var kwId = item.Id;
        var adGrId = item.AdGroupId;
        var adrgName = item.AdGroupName;
        adgroupKpi.loadContainer(adrgName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.KEYW.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.KEYW.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS
                || totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (adgroupKpi.isSS('m') || adgroupKpi.isSS('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && adgroupKpi.isSS('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && adgroupKpi.isSS('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (adgroupKpi.isSS('p') || adgroupKpi.isSS('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && adgroupKpi.isSS('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (adgroupKpi.isSS('m') || adgroupKpi.isSS('n'))) {
            rNum = "m5";
        } else if (cost == 0 && adgroupKpi.isSS('p0')) {
            rNum = "p1";
        } else if (cost == 0 && adgroupKpi.isSS('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (adgroupKpi.isSS('p2') || adgroupKpi.isSS('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && adgroupKpi.isSS('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (adgroupKpi.isSS('m5') || adgroupKpi.isSS('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(adGrId, kwId, rNum);
    }
    changesExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('aaKeyword', 'Finished');
}
function aaAdgroup() {
    BD.TIMESTAMP.stamp('aaAdgroup', 'Started');
    var entity = "ADGR";
    var type = "AA";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var campaignKpi = new KpiExtractor();
    var changesExecutor = new AdGroupKpiSetter();
    changesExecutor.setKeyElement("aa");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.AdGroupId;
        var campName = item.CampaignName;
        campaignKpi.loadContainer(campName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.ADGR.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.ADGR.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS
                || totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (campaignKpi.isSS('m') || campaignKpi.isSS('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && campaignKpi.isSS('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && campaignKpi.isSS('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (campaignKpi.isSS('p') || campaignKpi.isSS('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && campaignKpi.isSS('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (campaignKpi.isSS('m') || campaignKpi.isSS('n'))) {
            rNum = "m5";
        } else if (cost == 0 && campaignKpi.isSS('p0')) {
            rNum = "p1";
        } else if (cost == 0 && campaignKpi.isSS('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (campaignKpi.isSS('p2') || campaignKpi.isSS('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && campaignKpi.isSS('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (campaignKpi.isSS('m5') || campaignKpi.isSS('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(id, rNum);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('aaAdgroup', 'Finished');
}
function aaCampaign() {
    BD.TIMESTAMP.stamp('aaCampaign', 'Started');
    var entity = "CAMP";
    var type = "AA";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var campaignKpi = new KpiExtractor();
    var changesExecutor = new CampaignKpiSetter();
    changesExecutor.setKeyElement("aa");
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        var campName = item.CampaignName;
        campaignKpi.loadContainer(campName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.CAMP.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.CAMP.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (campaignKpi.isCC('m') || campaignKpi.isCC('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && campaignKpi.isCC('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && campaignKpi.isCC('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (campaignKpi.isCC('p') || campaignKpi.isCC('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && campaignKpi.isCC('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (campaignKpi.isCC('m') || campaignKpi.isCC('n'))) {
            rNum = "m5";
        } else if (cost == 0 && campaignKpi.isCC('p0')) {
            rNum = "p1";
        } else if (cost == 0 && campaignKpi.isCC('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (campaignKpi.isCC('p2') || campaignKpi.isCC('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && campaignKpi.isCC('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (campaignKpi.isCC('m5') || campaignKpi.isCC('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(id, rNum);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('aaCampaign', 'Finished');
}
function aaAccount() {
    BD.TIMESTAMP.stamp('aaAccount', 'Started');
    var entity = "ACC";
    var type = "AA";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var changeExecutor = new AccountKpiSetter();
    changeExecutor.setKeyElement("aa");
    var clicks = 0;
    var cost = 0;
    var regConv = 0;
    var assConv = 0;
    var regValue = 0;
    var assValue = 0;
    var totConv = 0;
    var totValue = 0;
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        clicks += parseFloat((item.Clicks).replace(/,/g, ""));
        cost += roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        regConv += parseFloat((item.AllConversions).replace(/,/g, ""));
        assConv += parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        regValue += parseFloat((item.AllConversionValue).replace(/,/g, ""));
        assValue += parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
    }
    totConv = regConv + assConv * BD.ACC.ASSISTED_COEFF;
    totValue = regValue + assValue * BD.ACC.ASSISTED_COEFF;
    if (cost == 0 && totValue > 0) {
        cost = 0.01;
    }
    var roi = roundToTwo(totValue / cost);
    var rNum = "er";
    if (clicks > BD[entity][type].ROI_CLICKS) {
        if (roi <= BD.ACC_N9) {
            rNum = "n9";
        } else if (roi <= BD.ACC_N8) {
            rNum = "n8";
        } else if (roi <= BD.ACC_N7) {
            rNum = "n7";
        } else if (roi <= BD.ACC_N6) {
            rNum = "n6";
        } else if (roi <= BD.ACC_M5) {
            rNum = "m5";
        } else if (roi <= BD.ACC_M4) {
            rNum = "m4";
        } else if (roi <= BD.ACC_P3) {
            rNum = "p3";
        } else if (roi <= BD.ACC_P2) {
            rNum = "p2";
        } else if (roi <= BD.ACC_P1) {
            rNum = "p1";
        } else if (roi > BD.ACC_P0) {
            rNum = "p0";
        }
    } else if (totConv > BD[entity][type].ENTR_CONVS) {
        if (roi <= BD.ACC_N6) {
            rNum = "m5";
        } else if (roi <= BD.ACC_M4) {
            rNum = "p3";
        } else if (roi > BD.ACC_M4) {
            rNum = "p2";
        }
    } else if (cost > 0 && totConv == 0) {
        rNum = "m4";
    } else {
        rNum = "m4";
    }
    changeExecutor.addValue(rNum);
    BD.TIMESTAMP.stamp('aaAccount', 'Finished');
}
function ssKeyword() {
    BD.TIMESTAMP.stamp('ssKeyword', 'Started');
    var entity = "KEYW";
    var type = "SS";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var keywordKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.load();
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("ss");
    changesExecutor.setBQObject(bigQuery);
    awqlBuilder.addAttribute("Id");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("Status != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("Impressions >= 1");
    awqlBuilder.addCondition("AveragePosition > 0");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.MONTH));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var kwId = item.Id;
        var adGrId = item.AdGroupId;
        var url = bigQuery.getParameter(adGrId, kwId);
        url = (url === undefined) ? "" : url;
        keywordKpi.loadContainer(url);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.KEYW.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.KEYW.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (keywordKpi.isAA('m') || keywordKpi.isAA('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && keywordKpi.isAA('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && keywordKpi.isAA('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (keywordKpi.isAA('p') || keywordKpi.isAA('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && keywordKpi.isAA('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (keywordKpi.isAA('m') || keywordKpi.isAA('n'))) {
            rNum = "m5";
        } else if (cost == 0 && keywordKpi.isAA('p0')) {
            rNum = "p1";
        } else if (cost == 0 && keywordKpi.isAA('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (keywordKpi.isAA('p2') || keywordKpi.isAA('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && keywordKpi.isAA('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (keywordKpi.isAA('m5') || keywordKpi.isAA('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(adGrId, kwId, rNum);
    }
    changesExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('ssKeyword', 'Finished');
}
function ssAdgroup() {
    BD.TIMESTAMP.stamp('ssAdgroup', 'Started');
    var entity = "ADGR";
    var type = "SS";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var adgroupKpi = new KpiExtractor();
    var changesExecutor = new AdGroupKpiSetter();
    changesExecutor.setKeyElement("ss");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.MONTH));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.AdGroupId;
        var adrgName = item.AdGroupName;
        adgroupKpi.loadContainer(adrgName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.ADGR.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.ADGR.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (adgroupKpi.isAA('m') || adgroupKpi.isAA('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && adgroupKpi.isAA('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && adgroupKpi.isAA('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (adgroupKpi.isAA('p') || adgroupKpi.isAA('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && adgroupKpi.isAA('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (adgroupKpi.isAA('m') || adgroupKpi.isAA('n'))) {
            rNum = "m5";
        } else if (cost == 0 && adgroupKpi.isAA('p0')) {
            rNum = "p1";
        } else if (cost == 0 && adgroupKpi.isAA('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (adgroupKpi.isAA('p2') || adgroupKpi.isAA('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && adgroupKpi.isAA('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (adgroupKpi.isAA('m5') || adgroupKpi.isAA('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(id, rNum);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('ssAdgroup', 'Finished');
}
function ssCampaign() {
    BD.TIMESTAMP.stamp('ssCampaign', 'Started');
    var entity = "CAMP";
    var type = "SS";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var campaignKpi = new KpiExtractor();
    var changesExecutor = new CampaignKpiSetter();
    changesExecutor.setKeyElement("ss");
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.MONTH));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        var campName = item.CampaignName;
        campaignKpi.loadContainer(campName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.CAMP.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.CAMP.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (campaignKpi.isAA('m') || campaignKpi.isAA('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && campaignKpi.isAA('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && campaignKpi.isAA('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (campaignKpi.isAA('p') || campaignKpi.isAA('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && campaignKpi.isAA('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (campaignKpi.isAA('m') || campaignKpi.isAA('n'))) {
            rNum = "m5";
        } else if (cost == 0 && campaignKpi.isAA('p0')) {
            rNum = "p1";
        } else if (cost == 0 && campaignKpi.isAA('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (campaignKpi.isAA('p2') || campaignKpi.isAA('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && campaignKpi.isAA('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (campaignKpi.isAA('m5') || campaignKpi.isAA('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(id, rNum);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('ssCampaign', 'Finished');
}
function ssAccount() {
    BD.TIMESTAMP.stamp('ssAccount', 'Started');
    var entity = "ACC";
    var type = "SS";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var accountKpi = new KpiExtractor();
    var labelToCheck = AdWordsApp
            .labels()
            .withCondition("Name = '##Account#Attributes##'")
            .get();
    if (labelToCheck.hasNext()) {
        var label = labelToCheck.next();
        var description = label.getDescription();
        accountKpi.loadContainer(description);
    }
    var changeExecutor = new AccountKpiSetter();
    changeExecutor.setKeyElement("ss");
    var clicks = 0;
    var cost = 0;
    var regConv = 0;
    var assConv = 0;
    var regValue = 0;
    var assValue = 0;
    var totConv = 0;
    var totValue = 0;
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.MONTH));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.CampaignId;
        clicks += parseFloat((item.Clicks).replace(/,/g, ""));
        cost += roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        regConv += parseFloat((item.AllConversions).replace(/,/g, ""));
        assConv += parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        regValue += parseFloat((item.AllConversionValue).replace(/,/g, ""));
        assValue += parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
    }
    totConv = regConv + assConv * BD.ACC.ASSISTED_COEFF;
    totValue = regValue + assValue * BD.ACC.ASSISTED_COEFF;
    if (cost == 0 && totValue > 0) {
        cost = 0.01;
    }
    var roi = roundToTwo(totValue / cost);
    var rNum = "er";
    if (clicks > BD[entity][type].ROI_CLICKS) {
        if (roi <= BD.ACC_N9) {
            rNum = "n9";
        } else if (roi <= BD.ACC_N8) {
            rNum = "n8";
        } else if (roi <= BD.ACC_N7) {
            rNum = "n7";
        } else if (roi <= BD.ACC_N6) {
            rNum = "n6";
        } else if (roi <= BD.ACC_M5) {
            rNum = "m5";
        } else if (roi <= BD.ACC_M4) {
            rNum = "m4";
        } else if (roi <= BD.ACC_P3) {
            rNum = "p3";
        } else if (roi <= BD.ACC_P2) {
            rNum = "p2";
        } else if (roi <= BD.ACC_P1) {
            rNum = "p1";
        } else if (roi > BD.ACC_P0) {
            rNum = "p0";
        }
    } else if (totConv > BD[entity][type].ENTR_CONVS) {
        if (roi <= BD.ACC_N6
                && (accountKpi.isAA('m') || accountKpi.isAA('n'))) {
            rNum = "m5";
        }
        if (roi <= BD.ACC_N6 && accountKpi.isAA('p')) {
            rNum = "p3";
        } else if (roi <= BD.ACC_M4) {
            rNum = "p3";
        } else if (roi > BD.ACC_M4) {
            rNum = "p2";
        }
    } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
            && accountKpi.isAA('n')) {
        rNum = "n6";
    } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
            && (accountKpi.isAA('p') || accountKpi.isAA('m'))) {
        rNum = "m5";
    } else if (cost > 0 && totConv == 0 && accountKpi.isAA('p')) {
        rNum = "p3";
    } else if (cost > 0 && totConv == 0
            && (accountKpi.isAA('m') || accountKpi.isAA('n'))) {
        rNum = "m5";
    } else {
        rNum = "m4";
    }
    changeExecutor.addValue(rNum);
    BD.TIMESTAMP.stamp('ssAccount', 'Finished');
}
function sdKeyword() {
    BD.TIMESTAMP.stamp('sdKeyword', 'Started');
    var entity = "KEYW";
    var type = "SD";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var keywordKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.load();
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("sd");
    changesExecutor.setBQObject(bigQuery);
    awqlBuilder.addAttribute("Id");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("Status != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("Impressions >= 1");
    awqlBuilder.addCondition("AveragePosition > 0");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.WEEK));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var kwId = item.Id;
        var adGrId = item.AdGroupId;
        var url = bigQuery.getParameter(adGrId, kwId);
        url = (url === undefined) ? "" : url;
        keywordKpi.loadContainer(url);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.KEYW.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.KEYW.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (keywordKpi.isSS('m') || keywordKpi.isSS('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && keywordKpi.isSS('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && keywordKpi.isSS('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (keywordKpi.isSS('p') || keywordKpi.isSS('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && keywordKpi.isSS('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (keywordKpi.isSS('m') || keywordKpi.isSS('n'))) {
            rNum = "m5";
        } else if (cost == 0 && keywordKpi.isSS('p0')) {
            rNum = "p1";
        } else if (cost == 0 && keywordKpi.isSS('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (keywordKpi.isSS('p2') || keywordKpi.isSS('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && keywordKpi.isSS('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (keywordKpi.isSS('m5') || keywordKpi.isSS('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(adGrId, kwId, rNum);
    }
    changesExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('sdKeyword', 'Finished');
}
function sdAdgroup() {
    BD.TIMESTAMP.stamp('sdAdgroup', 'Started');
    var entity = "ADGR";
    var type = "SD";
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var adgroupKpi = new KpiExtractor();
    var changesExecutor = new AdGroupKpiSetter();
    changesExecutor.setKeyElement("sd");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("ClickAssistedConversions");
    awqlBuilder.addAttribute("ClickAssistedConversionValue");
    awqlBuilder.addAttribute("AllConversions");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("AllConversionValue");
    awqlBuilder.addAttribute("Cost");
    awqlBuilder.addAttribute("Clicks");
    awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.WEEK));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var item = rows.next();
        var id = item.AdGroupId;
        var adrgName = item.AdGroupName;
        adgroupKpi.loadContainer(adrgName);
        var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
        var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
        var regConv = parseFloat((item.AllConversions).replace(/,/g, ""));
        var assConv = parseFloat((item.ClickAssistedConversions)
                .replace(/,/g, ""));
        var regValue = parseFloat((item.AllConversionValue).replace(/,/g, ""));
        var assValue = parseFloat((item.ClickAssistedConversionValue)
                .replace(/,/g, ""));
        var totConv = regConv + assConv * BD.ADGR.ASSISTED_COEFF;
        var totValue = regValue + assValue * BD.ADGR.ASSISTED_COEFF;
        if (cost == 0 && totValue > 0) {
            cost = 0.01;
        }
        var roi = roundToTwo(totValue / cost);
        var rNum = "er";
        if (clicks > BD[entity][type].ROI_CLICKS) {
            if (roi <= BD.N9) {
                rNum = "n9";
            } else if (roi <= BD.N8) {
                rNum = "n8";
            } else if (roi <= BD.N7) {
                rNum = "n7";
            } else if (roi <= BD.N6) {
                rNum = "n6";
            } else if (roi <= BD.M5) {
                rNum = "m5";
            } else if (roi <= BD.M4) {
                rNum = "m4";
            } else if (roi <= BD.P3) {
                rNum = "p3";
            } else if (roi <= BD.P2) {
                rNum = "p2";
            } else if (roi <= BD.P1) {
                rNum = "p1";
            } else if (roi > BD.P0) {
                rNum = "p0";
            }
        } else if (totConv > BD[entity][type].ENTR_CONVS) {
            if (roi <= BD.N6
                    && (adgroupKpi.isSS('m') || adgroupKpi.isSS('n'))) {
                rNum = "m5";
            } else if (roi <= BD.N6 && adgroupKpi.isSS('p')) {
                rNum = "p3";
            } else if (roi <= BD.M4) {
                rNum = "p3";
            } else if (roi > BD.M4) {
                rNum = "p2";
            }
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && adgroupKpi.isSS('n')) {
            rNum = "n6";
        } else if (clicks > BD[entity][type].ENTR_CLICKS && roi == 0
                && (adgroupKpi.isSS('p') || adgroupKpi.isSS('m'))) {
            rNum = "m5";
        } else if (cost > 0 && totConv == 0 && adgroupKpi.isSS('p')) {
            rNum = "p3";
        } else if (cost > 0 && totConv == 0
                && (adgroupKpi.isSS('m') || adgroupKpi.isSS('n'))) {
            rNum = "m5";
        } else if (cost == 0 && adgroupKpi.isSS('p0')) {
            rNum = "p1";
        } else if (cost == 0 && adgroupKpi.isSS('p1')) {
            rNum = "p2";
        } else if (cost == 0
                && (adgroupKpi.isSS('p2') || adgroupKpi.isSS('p3'))) {
            rNum = "p3";
        } else if (cost == 0 && adgroupKpi.isSS('m4')) {
            rNum = "m4";
        } else if (cost == 0
                && (adgroupKpi.isSS('m5') || adgroupKpi.isSS('n'))) {
            rNum = "n6";
        } else {
            rNum = "m4";
        }
        changesExecutor.addAValue(id, rNum);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('sdAdgroup', 'Finished');
}
function ttKeyword() {
    BD.TIMESTAMP.stamp('ttKeyword', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var map = {};
    var bonus = {};
    var fBonus = {};
    var keys = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("KeywordV2").getRange("A:D").getValues();
    var valuesFrom = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("KeywordV2").getRange("I:I").getValues();
    var manualBonus = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("Manual BonusV2").getRange("A:C").getValues();
    var forceBonus = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("Force Bonus").getRange("A:C").getValues();
    for (var i = 1; i < keys.length; i++) {
        map[keys[i][0] + keys[i][1] + keys[i][2]] = Math
                .round(valuesFrom[i][0]);
    }
    for (var i = 1; i < keys.length; i++) {
        map[keys[i][0] + keys[i][1] + keys[i][2] + keys[i][3]] = Math
                .round(valuesFrom[i][0]);
    }
    for (var i = 1; i < manualBonus.length; i++) {
        if (manualBonus[i][0] == "ALL"
                || manualBonus[i][0] == AdWordsApp.currentAccount()
                .getCustomerId()) {
            bonus[manualBonus[i][1]] = manualBonus[i][2];
        }
    }
    for (var i = 1; i < forceBonus.length; i++) {
        if (forceBonus[i][0] == "ALL"
                || forceBonus[i][0] == AdWordsApp.currentAccount()
                .getCustomerId()) {
            fBonus[forceBonus[i][1]] = forceBonus[i][2];
        }
    }
    var keywordKpi = new KpiExtractor();
    var adgroupKpi = new KpiExtractor();
    var geo = new GeoExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.load();
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("tt");
    changesExecutor.setBQObject(bigQuery);
    awqlBuilder.addAttribute("Id");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.addAttribute("KeywordMatchType");
    awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("Status != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.addCondition("Impressions >= 1");
    awqlBuilder.addCondition("AveragePosition > 0");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var tt = null;
        var item = rows.next();
        var kwId = item.Id;
        var adGrId = item.AdGroupId;
        var url = bigQuery.getParameter(adGrId, kwId);
        url = (url === undefined) ? "" : url;
        var adrgName = item.AdGroupName;
        var campName = item.CampaignName;
        var matchType = item.KeywordMatchType;
        var combination = "";
        keywordKpi.loadContainer(url);
        adgroupKpi.loadContainer(adrgName);
        geo.loadContainer(campName);
        if (keywordKpi.getSD() != null) {
            combination += keywordKpi.getSD();
        } else {
            combination += "m4";
        }
        if (keywordKpi.getSS() != null) {
            combination += keywordKpi.getSS();
        } else {
            combination += "m4";
        }
        if (keywordKpi.getAA() != null) {
            combination += keywordKpi.getAA();
        } else {
            combination += "m4";
        }
        if (adgroupKpi.getTT() != null) {
            combination += adgroupKpi.getTT();
        } else {
            combination += "m4";
        }
        var base = map[combination];
        var extraBonus = 0;
        if (bonus[geo.getLocation()] != null) {
            extraBonus += bonus[geo.getLocation()];
        } else if (bonus[geo.getRegion()] != null) {
            extraBonus += bonus[geo.getRegion()];
        } else if (bonus[geo.getCountry()] != null) {
            extraBonus += bonus[geo.getCountry()];
        }
        var extraForce = 0;
        if (fBonus[geo.getLocation()] != null) {
            extraForce += fBonus[geo.getLocation()];
        } else if (fBonus[geo.getRegion()] != null) {
            extraForce += fBonus[geo.getRegion()];
        } else if (fBonus[geo.getCountry()] != null) {
            extraForce += fBonus[geo.getCountry()];
        }
        var carry = 4;
        if (extraBonus > 0) {
            if (base <= 1) {
                carry = base;
            } else if ((keywordKpi.isAA('p') || keywordKpi.isAA('m4'))
                    && (keywordKpi.isSS('p0') || keywordKpi.isSS('p1') || keywordKpi.isSS('p2')
                            || keywordKpi.isSD('p1') || keywordKpi.isSD('p2') || keywordKpi.isSD('p3'))) {
                carry = (base - extraBonus <= 1) ? 1 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('p0') || keywordKpi.isSS('p1') || keywordKpi.isSS('p2')
                            || keywordKpi.isSD('p1') || keywordKpi.isSD('p2') || keywordKpi.isSD('p3'))) {
                carry = (base - extraBonus <= 2) ? 2 : base - extraBonus;
            } else if ((keywordKpi.isAA('p') || keywordKpi.isAA('m4'))
                    && (keywordKpi.isSS('p3') || keywordKpi.isSS('m4')
                            || keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))) {
                carry = (base - extraBonus <= 2) ? 2 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('p3') || keywordKpi.isSS('m4')
                            || keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))) {
                carry = (base - extraBonus <= 3) ? 3 : base - extraBonus;
            } else if (keywordKpi.isAA('p')
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus <= 3) ? 3 : base - extraBonus;
            } else if (keywordKpi.isAA('m4')
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus <= 4) ? 4 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus <= 5) ? 5 : base - extraBonus;
            } else {
                carry = base - extraBonus;
            }
        } else if (extraBonus < 0) {
            if (base >= 5) {
                carry = base;
            } else if ((keywordKpi.isAA('p') || keywordKpi.isAA('m4'))
                    && (keywordKpi.isSS('p0') || keywordKpi.isSS('p1') || keywordKpi.isSS('p2')
                            || keywordKpi.isSD('p1') || keywordKpi.isSD('p2') || keywordKpi.isSD('p3'))) {
                carry = (base - extraBonus >= 3) ? 3 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('p0') || keywordKpi.isSS('p1') || keywordKpi.isSS('p2')
                            || keywordKpi.isSD('p1') || keywordKpi.isSD('p2') || keywordKpi.isSD('p3'))) {
                carry = (base - extraBonus >= 4) ? 4 : base - extraBonus;
            } else if ((keywordKpi.isAA('p') || keywordKpi.isAA('m4'))
                    && (keywordKpi.isSS('p3') || keywordKpi.isSS('m4')
                            || keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))) {
                carry = (base - extraBonus >= 5) ? 5 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('p3') || keywordKpi.isSS('m4')
                            || keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))) {
                carry = (base - extraBonus >= 5) ? 5 : base - extraBonus;
            } else if (keywordKpi.isAA('p')
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus >= 5) ? 5 : base - extraBonus;
            } else if (keywordKpi.isAA('m4')
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus >= 6) ? 6 : base - extraBonus;
            } else if ((keywordKpi.isAA('m5') || keywordKpi.isAA('n'))
                    && (keywordKpi.isSS('m5') || keywordKpi.isSS('n')
                            || keywordKpi.isSD('m5') || keywordKpi.isSD('n'))) {
                carry = (base - extraBonus >= 7) ? 7 : base - extraBonus;
            } else {
                carry = base - extraBonus;
            }
        }
        if (matchType == "Broad") {
            if (carry <= 0) {
                carry = 1;
            } else if (carry <= 1) {
                carry = 2;
            } else if (carry <= 2) {
                carry = 3;
            } else if (carry <= 3 && (keywordKpi.isAA('n') || keywordKpi.isAA('m'))
                    && (keywordKpi.isSS('n') || keywordKpi.isSS('m'))) {
                carry = 4;
            } else if (carry <= 3 && (keywordKpi.isAA('n') || keywordKpi.isAA('m'))
                    && keywordKpi.isSS('p')) {
                carry = 3;
            } else if (carry <= 3 && keywordKpi.isAA('p')
                    && (keywordKpi.isSS('p') || keywordKpi.isSS('m'))) {
                carry = 3;
            } else if (carry <= 3 && keywordKpi.isAA('p') && keywordKpi.isSS('n')) {
                carry = 4;
            }
        }
        if (carry - extraForce < 0) {
            tt = BD.NUMTOTT[0];
        } else if (carry - extraForce > 9) {
            tt = BD.NUMTOTT[9];
        } else {
            tt = BD.NUMTOTT[carry - extraForce];
        }
        changesExecutor.addAValue(adGrId, kwId, tt);
    }
    changesExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('ttKeyword', 'Finished');
}
function ttAdgroup() {
    BD.TIMESTAMP.stamp('ttAdgroup', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var map = {};
    var bonus = {};
    var keys = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("AdgroupV2").getRange("A:D").getValues();
    var valuesFrom = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("AdgroupV2").getRange("I:I").getValues();
    var manualBonus = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("Manual BonusV2").getRange("A:C").getValues();
    for (var i = 1; i < keys.length; i++) {
        map[keys[i][0] + keys[i][1] + keys[i][2] + keys[i][3]] = Math
                .round(valuesFrom[i][0]);
    }
    for (var i = 1; i < manualBonus.length; i++) {
        if (manualBonus[i][0] == "ALL"
                || manualBonus[i][0] == AdWordsApp.currentAccount()
                .getCustomerId()) {
            bonus[manualBonus[i][1]] = manualBonus[i][2];
        }
    }
    var adgroupKpi = new KpiExtractor();
    var campaignKpi = new KpiExtractor();
    var geo = new GeoExtractor();
    var changesExecutor = new AdGroupKpiSetter();
    changesExecutor.setKeyElement("tt");
    awqlBuilder.addAttribute("AdGroupId");
    awqlBuilder.addAttribute("AdGroupName");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.setReportType("ADGROUP_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("AdGroupStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var tt = null;
        var item = rows.next();
        var id = item.AdGroupId;
        var adrgName = item.AdGroupName;
        var campName = item.CampaignName;
        var combination = "";
        adgroupKpi.loadContainer(adrgName);
        campaignKpi.loadContainer(campName);
        geo.loadContainer(campName);
        if (adgroupKpi.getSD() != null) {
            combination += adgroupKpi.getSD();
        } else {
            combination += "m4";
        }
        if (adgroupKpi.getSS() != null) {
            combination += adgroupKpi.getSS();
        } else {
            combination += "m4";
        }
        if (adgroupKpi.getAA() != null) {
            combination += adgroupKpi.getAA();
        } else {
            combination += "m4";
        }
        if (campaignKpi.getTT() != null) {
            combination += campaignKpi.getTT();
        } else {
            combination += "m4";
        }
        var base = map[combination];
        var extraBonus = 0;
        var boBonus = 0;
        if (bonus[geo.getLocation()] != null) {
            boBonus += bonus[geo.getLocation()];
        } else if (bonus[geo.getRegion()] != null) {
            boBonus += bonus[geo.getRegion()];
        } else if (bonus[geo.getCountry()] != null) {
            boBonus += bonus[geo.getCountry()];
        }
        if (boBonus < 0) {
            if (adgroupKpi.isSS('p0') || adgroupKpi.isSS('p1')
                    || adgroupKpi.isSS('p2')) {
                boBonus = 0;
            } else if (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                    || adgroupKpi.isSD('p2')) {
                boBonus = 0;
            } else if ((adgroupKpi.isAA('p0') || adgroupKpi.isAA('p1')
                    || adgroupKpi.isAA('p2')) && adgroupKpi.isNotSS('n')) {
                boBonus = 0;
            } else if (adgroupKpi.isAA('p3')
                    && !(adgroupKpi.isSS('m') || adgroupKpi.isSS('n'))) {
                boBonus = 0;
            }
        } else if (boBonus > 0) {
            if (adgroupKpi.isSS('n')) {
                boBonus = 0;
            } else if (adgroupKpi.isSD('n')) {
                boBonus = 0;
            } else if (adgroupKpi.isAA('n')
                    && (adgroupKpi.isSS('m5') || adgroupKpi.isSS('n'))) {
                boBonus = 0;
            } else if (adgroupKpi.isAA('m') && adgroupKpi.isSS('n')) {
                boBonus = 0;
            }
        }
        extraBonus += boBonus;
        if (base - extraBonus < 0) {
            tt = BD.NUMTOTT[0];
        } else if (base - extraBonus > 9) {
            tt = BD.NUMTOTT[9];
        } else {
            tt = BD.NUMTOTT[base - extraBonus];
        }
        changesExecutor.addAValue(id, tt);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('ttAdgroup', 'Finished');
}
function ttCampaign() {
    BD.TIMESTAMP.stamp('ttCampaign', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var map = {};
    var keys = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("CampaignV2").getRange("A:D").getValues();
    var valuesFrom = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("CampaignV2").getRange("I:I").getValues();
    for (var i = 1; i < keys.length; i++) {
        map[keys[i][0] + keys[i][1] + keys[i][2] + keys[i][3]] = Math
                .round(valuesFrom[i][0]);
    }
    var campaignKpi = new KpiExtractor();
    var accountKpi = new KpiExtractor();
    var labelToCheck = AdWordsApp
            .labels()
            .withCondition("Name = '##Account#Attributes##'")
            .get();
    if (labelToCheck.hasNext()) {
        var label = labelToCheck.next();
        var description = label.getDescription();
        accountKpi.loadContainer(description);
    }
    var changesExecutor = new CampaignKpiSetter();
    changesExecutor.setKeyElement("tt");
    awqlBuilder.addAttribute("CampaignId");
    awqlBuilder.addAttribute("CampaignName");
    awqlBuilder.setReportType("CAMPAIGN_PERFORMANCE_REPORT");
    awqlBuilder.addCondition("CampaignStatus != REMOVED");
    awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
    awqlBuilder.setStartDate(dateFormater
            .getStringByFullString(BD.MOTHER_OF_ALL_DATES));
    awqlBuilder.setEndDate(dateFormater.getTodayAsString());
    var report = AdWordsApp.report(awqlBuilder.buildQuery());
    var rows = report.rows();
    while (rows.hasNext()) {
        var tt = null;
        var item = rows.next();
        var id = item.CampaignId;
        var campName = item.CampaignName;
        var combination = "";
        campaignKpi.loadContainer(campName);
        if (accountKpi.getTT() != null) {
            combination += accountKpi.getTT();
        } else {
            combination += "m4";
        }
        if (campaignKpi.getSS() != null) {
            combination += campaignKpi.getSS();
        } else {
            combination += "m4";
        }
        if (campaignKpi.getCC() != null) {
            combination += campaignKpi.getCC();
        } else {
            combination += "m4";
        }
        if (campaignKpi.getAA() != null) {
            combination += campaignKpi.getAA();
        } else {
            combination += "m4";
        }
        var base = map[combination];
        var extraBonus = 0;
        if (base - extraBonus < 0) {
            tt = BD.NUMTOTT[0];
        } else if (base - extraBonus > 9) {
            tt = BD.NUMTOTT[9];
        } else {
            tt = BD.NUMTOTT[base - extraBonus];
        }
        changesExecutor.addAValue(id, tt);
    }
    changesExecutor.flush();
    BD.TIMESTAMP.stamp('ttCampaign', 'Finished');
}
function ttAccount() {
    BD.TIMESTAMP.stamp('ttAccount', 'Started');
    var map = {};
    var keys = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("Account").getRange("A:B").getValues();
    var valuesFrom = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("Account").getRange("E:E").getValues();
    for (var i = 1; i < keys.length; i++) {
        map[keys[i][0] + keys[i][1]] = Math.round(valuesFrom[i][0]);
    }
    var accountKpi = new KpiExtractor();
    var changeExecutor = new AccountKpiSetter();
    changeExecutor.setKeyElement("tt");
    var labelToCheck = AdWordsApp
            .labels()
            .withCondition("Name = '##Account#Attributes##'")
            .get();
    if (labelToCheck.hasNext()) {
        var label = labelToCheck.next();
        var description = label.getDescription();
        var combination = "";
        var tt = "";
        accountKpi.loadContainer(description);
        if (accountKpi.getSS() != null) {
            combination += accountKpi.getSS();
        } else {
            combination += "m4";
        }
        if (accountKpi.getAA() != null) {
            combination += accountKpi.getAA();
        } else {
            combination += "m4";
        }
        tt = BD.NUMTOTT[map[combination]];
        changeExecutor.addValue(tt);
    } else {
        changeExecutor.addValue("m4");
    }
    BD.TIMESTAMP.stamp('ttAccount', 'Finished');
}
function cpKeyword() {
    BD.TIMESTAMP.stamp('cpKeyword', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var cpArray = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("cpBonusV3").getRange("C:C").getValues();
    var keywordKpi = new KpiExtractor();
    var adgroupKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.loadWithFilters(new And(new BQ_Like('trf', ''), new BQ_Like('tt', '')));
    var cpExecutor = new KeywordKpiSetter();
    cpExecutor.setKeyElement("cp");
    cpExecutor.setBQObject(bigQuery);
    var cpMap = {};
    var cpBonus = 0;
    var impCond = 5;
    var allIds = bigQuery.extractIds();
    var tempArray = [];
    while (allIds.length > 0) {
        if (allIds.length > BD.CHANGES_PAGESIZE) {
            tempArray = allIds.splice(0, BD.CHANGES_PAGESIZE);
        } else {
            tempArray = allIds.splice(0, allIds.length);
        }
        var kIds = [];
        var aIds = [];
        for (var i in tempArray) {
            aIds[i] = tempArray[i][0];
            kIds[i] = tempArray[i][1];
        }
        for (var daysBack = 1; daysBack <= BD.WEEK; daysBack++) {
            if (daysBack == 2) {
                cpBonus = 0.10;
            } else if (daysBack == 3) {
                cpBonus = 0.15;
            } else if (daysBack == 4) {
                cpBonus = 0.20;
            } else if (daysBack == 5) {
                cpBonus = 0.25;
            } else if (daysBack == 6) {
                cpBonus = 0.30;
            } else if (daysBack == 7) {
                cpBonus = 0.35;
                impCond = 1;
            }
            awqlBuilder.addAttribute("Id");
            awqlBuilder.addAttribute("AdGroupId");
            awqlBuilder.addAttribute("Criteria");
            awqlBuilder.addAttribute("AdGroupName");
            awqlBuilder.addAttribute("CampaignName");
            awqlBuilder.addAttribute("AveragePosition");
            awqlBuilder.addAttribute("AllConversionValue");
            awqlBuilder.addAttribute("Cost");
            awqlBuilder.addAttribute("ClickAssistedConversionValue");
            awqlBuilder.addAttribute("CpcBid");
            awqlBuilder.addAttribute("QualityScore");
            awqlBuilder.addAttribute("FirstPageCpc");
            awqlBuilder.addAttribute("FirstPositionCpc");
            awqlBuilder.addAttribute("TopOfPageCpc");
            awqlBuilder.addAttribute("Impressions");
            awqlBuilder.addAttribute("Clicks");
            awqlBuilder.addAttribute("KeywordMatchType");
            awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
            awqlBuilder.addCondition("AdGroupId IN [" + aIds + "]");
            awqlBuilder.addCondition("Id IN [" + kIds + "]");
            awqlBuilder.addCondition("CampaignStatus != REMOVED");
            awqlBuilder.addCondition("AdGroupStatus != REMOVED");
            awqlBuilder.addCondition("Status != REMOVED");
            awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
            awqlBuilder.addCondition("Impressions >= " + impCond);
            awqlBuilder.addCondition("AveragePosition > 0");
            awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(daysBack));
            awqlBuilder.setEndDate(dateFormater.getTodayAsString());
            var report = AdWordsApp.report(awqlBuilder.buildQuery());
            var rows = report.rows();
            while (rows.hasNext()) {
                var item = rows.next();
                var kwId = item.Id;
                var adGrId = item.AdGroupId;
                if (cpMap[adGrId + "#" + kwId] != null) {
                    continue;
                }
                var url = bigQuery.getParameter(adGrId, kwId);
                url = (url === undefined) ? "" : url;
                keywordKpi.loadContainer(url);
                adgroupKpi.loadContainer(item.AdGroupName);
                var kwText = item.Criteria;
                var campName = item.CampaignName;
                var matchType = item.KeywordMatchType;
                var impressions = parseFloat(item.Impressions.replace(/,/g, ""));
                var cost = roundToTwo(parseFloat((item.Cost).replace(/,/g, "")));
                var regValue = parseFloat((item.AllConversionValue)
                        .replace(/,/g, ""));
                var assValue = parseFloat((item.ClickAssistedConversionValue)
                        .replace(/,/g, ""));
                var totValue = regValue + assValue * BD.KEYW.ASSISTED_COEFF;
                if (cost == 0 && totValue > 0) {
                    cost = 0.01;
                }
                var roi = roundToTwo(totValue / cost);
                var clicks = parseFloat((item.Clicks).replace(/,/g, ""));
                var ctr = clicks / impressions;
                var qs = item.QualityScore;
                var avgPos = item.AveragePosition;
                var fpageCpc = (parseFloat((item.FirstPageCpc).replace(/,/g, "")));
                var tpageCpc = (parseFloat((item.TopOfPageCpc).replace(/,/g, "")));
                var fposCpc = (parseFloat((item.FirstPositionCpc)
                        .replace(/,/g, "")));
                if (isNaN(tpageCpc) || tpageCpc == 0) {
                    tpageCpc = fpageCpc * 1.25;
                }
                if (isNaN(fposCpc) || fposCpc == 0) {
                    fposCpc = tpageCpc * 1.4;
                }
                var maxCpc = item.CpcBid;
                var currentPosition = (parseFloat((avgPos).replace(/,/g, "")));
                currentPosition += cpBonus;
                if (ctr < 0.1 && roi > 0.75) {
                    currentPosition += parseFloat(cpArray[1][0]);
                }
                if (ctr == 0) {
                    currentPosition += parseFloat(cpArray[2][0]);
                }
                if (ctr < 0.07) {
                    currentPosition += parseFloat(cpArray[3][0]);
                }
                if (clicks < 5) {
                    currentPosition += parseFloat(cpArray[4][0]);
                }
                if (campName.indexOf("TRG") != -1 && avgPos > 3) {
                    currentPosition += parseFloat(cpArray[5][0]);
                }
                if (matchType == "Exact" || matchType == "Phrase") {
                    currentPosition += parseFloat(cpArray[6][0]);
                }
                if (matchType == "Broad") {
                    currentPosition += parseFloat(cpArray[7][0]);
                }
                if (cost > 0 && totValue == 0
                        && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[8][0]);
                }
                if (cost > 0 && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[9][0]);
                }
                if (ctr < 0.07 && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                        || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[10][0]);
                }
                if (clicks == 0 && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                        || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[11][0]);
                }
                if (ctr < 0.05
                        && (keywordKpi.isTT('p3') || keywordKpi.isTT('m4'))) {
                    currentPosition += parseFloat(cpArray[12][0]);
                }
                if (clicks == 0
                        && (keywordKpi.isTT('p3') || keywordKpi.isTT('m4'))) {
                    currentPosition += parseFloat(cpArray[13][0]);
                }
                if (ctr < 0.02
                        && (keywordKpi.isTT('m5') || keywordKpi.isTT('n'))) {
                    currentPosition += parseFloat(cpArray[14][0]);
                }
                if (clicks == 0
                        && (keywordKpi.isTT('m5') || keywordKpi.isTT('n'))) {
                    currentPosition += parseFloat(cpArray[15][0]);
                }
                if (ctr < 0.1 && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                        || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[16][0]);
                }
                if (ctr < 0.07 && qs < 8 && (keywordKpi.isTT('p0')
                        || keywordKpi.isTT('p1') || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[17][0]);
                }
                if (ctr < 0.04 && maxCpc < fpageCpc
                        && (keywordKpi.isTT('p3') || keywordKpi.isTT('m4'))
                        && adgroupKpi.isSD('p')) {
                    currentPosition += parseFloat(cpArray[18][0]);
                }
                if (ctr < 0.1 && maxCpc >= fpageCpc
                        && (keywordKpi.isTT('p3') || keywordKpi.isTT('m4'))
                        && adgroupKpi.isSD('p')) {
                    currentPosition += parseFloat(cpArray[19][0]);
                }
                if (clicks < 10 && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                        || keywordKpi.isSD('p2'))) {
                    currentPosition += parseFloat(cpArray[20][0]);
                }
                if (campName.indexOf(BD.SITE.ID) != -1 && ctr < 0.4
                        && (keywordKpi.isSD('p') || keywordKpi.isSD('m'))) {
                    currentPosition += parseFloat(cpArray[21][0]);
                }
                if (campName.indexOf(BD.SITE.ID) != -1 && clicks < 10
                        && (keywordKpi.isSD('p') || keywordKpi.isSD('m'))) {
                    currentPosition += parseFloat(cpArray[22][0]);
                }
                if (kwText.indexOf(BD.SITE.KW) != -1
                        && campName.indexOf(BD.SITE.ID) == -1 && ctr < 0.4
                        && (keywordKpi.isSD('p') || keywordKpi.isSD('m'))) {
                    currentPosition += parseFloat(cpArray[23][0]);
                }
                if (kwText.indexOf(BD.SITE.KW) != -1
                        && campName.indexOf(BD.SITE.ID) == -1 && clicks < 7
                        && (keywordKpi.isSD('p') || keywordKpi.isSD('m'))) {
                    currentPosition += parseFloat(cpArray[24][0]);
                }
                if (ctr > 0.1 && (keywordKpi.isTT('p3') || keywordKpi.isTT('m4'))
                        && adgroupKpi.isNotSD('p')) {
                    currentPosition += parseFloat(cpArray[25][0]);
                }
                if (ctr > 0.07 && roi == 0 && keywordKpi.isTT('m')) {
                    currentPosition += parseFloat(cpArray[26][0]);
                }
                if (ctr > 0.04 && roi == 0 && keywordKpi.isTT('n')) {
                    currentPosition += parseFloat(cpArray[27][0]);
                }
                if (ctr > 0.02 && roi == 0 && qs >= 8
                        && (keywordKpi.isTT('m5') || keywordKpi.isTT('n'))) {
                    currentPosition += parseFloat(cpArray[28][0]);
                }
                if (roi == 0 && keywordKpi.isSD('n') && cost > 30
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[29][0]);
                }
                if (roi == 0 && keywordKpi.isSD('n') && cost > 20
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[30][0]);
                }
                if (roi == 0 && keywordKpi.isSD('n') && cost > 7
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[31][0]);
                }
                if (roi == 0 && keywordKpi.isSD('n') && clicks > 28
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[32][0]);
                }
                if (roi == 0 && keywordKpi.isSD('n') && clicks > 19
                        && keywordKpi.isNotTT('p0') && keywordKpi.isNotTT('p1')
                        && keywordKpi.isNotTT('p2')) {
                    currentPosition += parseFloat(cpArray[33][0]);
                }
                if (ctr > 0.03 && roi == 0 && cost > 10 && keywordKpi.isSD("n")
                        && (keywordKpi.isTT('m5') || keywordKpi.isTT('n'))) {
                    currentPosition += parseFloat(cpArray[34][0]);
                }
                if (ctr < 0.07 && keywordKpi.isSD('p')
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))
                        && (keywordKpi.isTRF('1i') || keywordKpi.isTRF('2i'))) {
                    currentPosition += parseFloat(cpArray[35][0]);
                }
                if (ctr < 0.07 && keywordKpi.isSD('p')
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))
                        && (keywordKpi.isTRF('3i') || keywordKpi.isTRF('4i')
                                || keywordKpi.isTRF('5i')
                                || keywordKpi.isTRF('6i')
                                || keywordKpi.isTRF('7i'))) {
                    currentPosition += parseFloat(cpArray[36][0]);
                }
                if (ctr > 0.03 && keywordKpi.isNotSD('p')
                        && keywordKpi.isTT('m')
                        && (keywordKpi.isTRF('i01') || keywordKpi.isTRF('i02'))) {
                    currentPosition += parseFloat(cpArray[37][0]);
                }
                if (ctr > 0.03 && keywordKpi.isNotSD('p')
                        && keywordKpi.isTT('n')
                        && (keywordKpi.isTRF('3i') || keywordKpi.isTRF('4i')
                                || keywordKpi.isTRF('5i')
                                || keywordKpi.isTRF('6i')
                                || keywordKpi.isTRF('7i'))) {
                    currentPosition += parseFloat(cpArray[38][0]);
                }
                if ((adgroupKpi.isTT('p0') || adgroupKpi.isTT('p1')
                        || adgroupKpi.isTT('p2')) && keywordKpi.isNotAA('n')
                        && !(keywordKpi.isSS('m5') || keywordKpi.isSS('n'))) {
                    currentPosition += parseFloat(cpArray[39][0]);
                }
                if (adgroupKpi.isTT('p3') && (keywordKpi.isAA('p0')
                        || keywordKpi.isAA('p1') || keywordKpi.isAA('p2')
                        || keywordKpi.isSS('p0') || keywordKpi.isSS('p1')
                        || keywordKpi.isSS('p2') || keywordKpi.isSD('p0')
                        || keywordKpi.isSD('p1') || keywordKpi.isSD('p2'))
                        && keywordKpi.isNotSS('n') && keywordKpi.isNotSD('n')) {
                    currentPosition += parseFloat(cpArray[40][0]);
                }
                if (adgroupKpi.isNotTT('p') && (keywordKpi.isAA('m5')
                        || keywordKpi.isAA('n') || keywordKpi.isSS('m5')
                        || keywordKpi.isSS('n')) && keywordKpi.isNotSD('p')) {
                    currentPosition += parseFloat(cpArray[41][0]);
                }
                if (adgroupKpi.isTT('p3') && (keywordKpi.isAA('m5')
                        || keywordKpi.isAA('n') || keywordKpi.isSS('m5')
                        || keywordKpi.isSS('n')) && keywordKpi.isNotSD('p')) {
                    currentPosition += parseFloat(cpArray[42][0]);
                }
                if (cost > 0 && totValue == 0
                        && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[43][0]);
                }
                if (cost > 0 && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[44][0]);
                }
                if (roi == 0 && cost > 30 && keywordKpi.isSD('n')
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[45][0]);
                }
                if (roi == 0 && cost > 20 && keywordKpi.isSD('n')
                        && (keywordKpi.isTT('p0') || keywordKpi.isTT('p1')
                                || keywordKpi.isTT('p2'))) {
                    currentPosition += parseFloat(cpArray[45][0]);
                }
                if (isNaN(currentPosition)) {
                    continue;
                }
                cpMap[adGrId + "#" + kwId] = "ok";
                cpExecutor.addAValue(adGrId, kwId, roundToTwo(currentPosition));
            }
        }
    }
    cpExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('cpKeyword', 'Finished');
}
function ksKeyword() {
    BD.TIMESTAMP.stamp('ksKeyword', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var keywordKpi = new KpiExtractor();
    var adgroupKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.loadWithFilters(new And(new BQ_Like('trf', ''),
            new And(new BQ_Like('tt', ''), new BQ_Like('cp', ''))));
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("ks");
    changesExecutor.setBQObject(bigQuery);
    var allIds = bigQuery.extractIds();
    var tempArray = [];
    while (allIds.length > 0) {
        if (allIds.length > BD.CHANGES_PAGESIZE) {
            tempArray = allIds.splice(0, BD.CHANGES_PAGESIZE);
        } else {
            tempArray = allIds.splice(0, allIds.length);
        }
        var kIds = [];
        var aIds = [];
        for (var i in tempArray) {
            aIds[i] = tempArray[i][0];
            kIds[i] = tempArray[i][1];
        }
        awqlBuilder.addAttribute("Id");
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.addAttribute("AdGroupName");
        awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("AdGroupId IN [" + aIds + "]");
        awqlBuilder.addCondition("Id IN [" + kIds + "]");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("Status != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.setStartDate(dateFormater.getTodayAsString());
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var kwId = item.Id;
            var adGrId = item.AdGroupId;
            var url = bigQuery.getParameter(adGrId, kwId);
            url = (url === undefined) ? "" : url;
            keywordKpi.loadContainer(url);
            adgroupKpi.loadContainer(item.AdGroupName);
            var expectedPosition = 5;
            if (keywordKpi.getTT() != null) {
                expectedPosition = parseFloat((keywordKpi.getTT())
                        .replace(/[pmn]/g, "")) + 1;
            }
            var rNum = "er";
            if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "oka1";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "oka2";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "okm1";
            } else if (keywordKpi.hasCP()
                    && (keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "okm2";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "okm3";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "okm4";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "okm5";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "okt1";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0.2
                    && (keywordKpi.getCP() - expectedPosition) <= 0.5
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "okt2";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya01";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ya02";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ya03";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya04";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ya05";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ya06";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya07";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ya08";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ya09";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya10";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ya11";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ya12";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya13";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ya14";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ya15";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ya16";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym01";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym02";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym03";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym04";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym05";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym06";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym07";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym08";
            } else if ((keywordKpi.getCP() - expectedPosition) <= -2.3
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym09";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym10";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym11";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym12";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym13";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym14";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym15";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym16";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym17";
            } else if ((keywordKpi.getCP() - expectedPosition) > -2.3
                    && (keywordKpi.getCP() - expectedPosition) < 0
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym18";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym19";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym20";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym21";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym22";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym23";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p3') || keywordKpi.isSD('m4'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym24";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym25";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym26";
            } else if ((keywordKpi.getCP() - expectedPosition) >= 0
                    && (keywordKpi.getCP() - expectedPosition) < 0.2
                    && (keywordKpi.isSD('p0') || keywordKpi.isSD('p1')
                            || keywordKpi.isSD('p2'))
                    && (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1')
                            || adgroupKpi.isSD('p2'))) {
                rNum = "ym27";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n'))) {
                rNum = "ym28";
            } else if ((keywordKpi.getCP() - expectedPosition) > 0.5
                    && (keywordKpi.getCP() - expectedPosition) < 2.3
                    && (keywordKpi.isSD('m5') || keywordKpi.isSD('n'))
                    && (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4'))) {
                rNum = "ym29";
            } else {
                continue;
            }
            changesExecutor.addAValue(adGrId, kwId, rNum);
        }
    }
    changesExecutor.flush();
    bigQuery.close();
    BD.TIMESTAMP.stamp('ksKeyword', 'Finished');
}
function trfKeyword() {
    BD.TIMESTAMP.stamp('trfKeyword', 'Started');
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var keywordKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.load();
    var changesExecutor = new KeywordKpiSetter();
    changesExecutor.setKeyElement("trf");
    changesExecutor.setBQObject(bigQuery);
    var repeater = [
        [1, 5, '1i'],
        [2, 5, '2i'],
        [3, 5, '3i'],
        [4, 5, '4i'],
        [5, 5, '5i'],
        [6, 5, '6i'],
        [7, 1, '7i']
    ];
    for (var i in repeater) {
        awqlBuilder.addAttribute("Id");
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.addAttribute("Impressions");
        awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("Status != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.addCondition("Impressions >= 1");
        awqlBuilder.addCondition("AveragePosition > 0");
        awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(repeater[i][0]));
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var kwId = item.Id;
            var adGrId = item.AdGroupId;
            var url = bigQuery.getParameter(adGrId, kwId);
            url = (url === undefined) ? "" : url;
            keywordKpi.loadContainer(url);
            if (keywordKpi.getTRF() != null) {
                continue;
            }
            var impressions = parseFloat((item.Impressions).replace(/,/g, ""));
            var rNum = "er";
            if (impressions >= repeater[i][1]) {
                rNum = repeater[i][2];
            } else {
                continue;
            }
            changesExecutor.addAValue(adGrId, kwId, rNum);
        }
        changesExecutor.flush();
        bigQuery.close();
    }
    BD.TIMESTAMP.stamp('trfKeyword', 'Finished');
}
function bidder(fKey, fValue) {
    BD.TIMESTAMP.stamp('bidder ' + '&' + fKey + '=' + fValue, 'Started');
    if (fKey == null || fValue == null) {
        throw "NullPointerExeption";
    }
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var matrix = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("BidderV2").getRange("A:N").getValues();
    var ypoxrArray = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("YpoxrewtikaV7").getRange("B:B").getValues();
    var okaCoef = 1;
    var okmCoef = 1;
    var oktCoef = 1;
    var yaCoef = 1;
    var ymCoef = 1;
    var zaCoef = 1;
    var zktCoef = 1;
    var zmCoef = 1;
    var keywordKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    bigQuery.loadWithFilters(new BQ_Like(fKey, fValue));
    var bidsExecutor = new KeywordBidder();
    var allIds = bigQuery.extractIds();
    var tempArray = [];
    while (allIds.length > 0) {
        if (allIds.length > BD.CHANGES_PAGESIZE) {
            tempArray = allIds.splice(0, BD.CHANGES_PAGESIZE);
        } else {
            tempArray = allIds.splice(0, allIds.length);
        }
        var kIds = [];
        var aIds = [];
        for (var i in tempArray) {
            aIds[i] = tempArray[i][0];
            kIds[i] = tempArray[i][1];
        }
        awqlBuilder.addAttribute("Id");
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.addAttribute("CpcBid");
        awqlBuilder.addAttribute("FirstPageCpc");
        awqlBuilder.addAttribute("FirstPositionCpc");
        awqlBuilder.addAttribute("TopOfPageCpc");
        awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("AdGroupId IN [" + aIds + "]");
        awqlBuilder.addCondition("Id IN [" + kIds + "]");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("Status != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.setStartDate(dateFormater.getTodayAsString());
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var kwId = item.Id;
            var adGrId = item.AdGroupId;
            var url = bigQuery.getParameter(adGrId, kwId);
            url = (url === undefined) ? "" : url;
            keywordKpi.loadContainer(url);
            if (keywordKpi.getTRF() == null) {
                continue;
            }
            var expectedPosition = 5;
            if (keywordKpi.getTT() != null) {
                expectedPosition = parseFloat((keywordKpi.getTT())
                        .replace(/[pmn]/g, "")) + 1;
            }
            var maxCpc = (parseFloat((item.CpcBid).replace(/,/g, "")));
            var fpageCpc = (parseFloat((item.FirstPageCpc).replace(/,/g, "")));
            var tpageCpc = (parseFloat((item.TopOfPageCpc).replace(/,/g, "")));
            var fposCpc = (parseFloat((item.FirstPositionCpc).replace(/,/g, "")));
            if (isNaN(fpageCpc) || fpageCpc == 0) {
                fpageCpc = 0.25;
            }
            if (isNaN(tpageCpc) || tpageCpc == 0) {
                tpageCpc = fpageCpc * 1.25;
            }
            if (isNaN(fposCpc) || fposCpc == 0) {
                fposCpc = tpageCpc * 1.4;
            }
            if (fpageCpc < 0.25) {
                fpageCpc = 0.25;
            } else if (fpageCpc > 7) {
                fpageCpc = 7;
            }
            if (tpageCpc < 0.50) {
                tpageCpc = 0.50;
            } else if (tpageCpc > 15) {
                tpageCpc = 15;
            }
            if (fposCpc < 0.50) {
                fposCpc = 0.50;
            } else if (fposCpc > 21) {
                fposCpc = 21;
            }
            var tpage2fpage = roundToTwo(((10 - (tpageCpc / fpageCpc)) / 10) + 0.1);
            var fpos2tpage = roundToTwo((fposCpc / tpageCpc / 100) + 1);
            var average = roundToTwo((fpageCpc * matrix[1][4] + tpageCpc
                    * matrix[1][5] + fposCpc * matrix[1][6]) /
                    (matrix[1][4] + matrix[1][5] + matrix[1][6]));
            var position1 = 0;
            var position2 = 0;
            var position3 = 0;
            var position4 = 0;
            var position5 = 0;
            var position6 = 0;
            var position7 = 0;
            var position8 = 0;
            var position9 = 0;
            var position10 = 0;
            position4 = (fpageCpc * matrix[5][4] + tpageCpc * matrix[5][5]
                    + fposCpc * matrix[5][6] + average * matrix[5][7] + position4
                    * matrix[5][8] + position1 * matrix[5][9] + position7
                    * matrix[5][10]) /
                    (matrix[5][4] + matrix[5][5] + matrix[5][6] + matrix[5][7]
                            + matrix[5][8] + matrix[5][9] + matrix[5][10])
                    * matrix[5][1];
            if (matrix[5][11] != 0) {
                position4 *= (tpage2fpage * matrix[5][11]);
            }
            if (matrix[5][12] != 0) {
                position4 *= (fpos2tpage * matrix[5][12]);
            }
            position4 = roundToTwo(position4);
            position1 = (fpageCpc * matrix[2][4] + tpageCpc * matrix[2][5]
                    + fposCpc * matrix[2][6] + average * matrix[2][7] + position4
                    * matrix[2][8] + position1 * matrix[2][9] + position7
                    * matrix[2][10]) /
                    (matrix[2][4] + matrix[2][5] + matrix[2][6] + matrix[2][7]
                            + matrix[2][8] + matrix[2][9] + matrix[2][10])
                    * matrix[2][1];
            if (matrix[2][11] != 0) {
                position1 *= (tpage2fpage * matrix[2][11]);
            }
            if (matrix[2][12] != 0) {
                position1 *= (fpos2tpage * matrix[2][12]);
            }
            position1 = roundToTwo(position1);
            position2 = (fpageCpc * matrix[3][4] + tpageCpc * matrix[3][5]
                    + fposCpc * matrix[3][6] + average * matrix[3][7] + position4
                    * matrix[3][8] + position1 * matrix[3][9] + position7
                    * matrix[3][10]) /
                    (matrix[3][4] + matrix[3][5] + matrix[3][6] + matrix[3][7]
                            + matrix[3][8] + matrix[3][9] + matrix[3][10])
                    * matrix[3][1];
            if (matrix[3][11] != 0) {
                position2 *= (tpage2fpage * matrix[3][11]);
            }
            if (matrix[3][12] != 0) {
                position2 *= (fpos2tpage * matrix[3][12]);
            }
            position2 = roundToTwo(position2);
            position3 = (fpageCpc * matrix[4][4] + tpageCpc * matrix[4][5]
                    + fposCpc * matrix[4][6] + average * matrix[4][7] + position4
                    * matrix[4][8] + position1 * matrix[4][9] + position7
                    * matrix[4][10]) /
                    (matrix[4][4] + matrix[4][5] + matrix[4][6] + matrix[4][7]
                            + matrix[4][8] + matrix[4][9] + matrix[4][10])
                    * matrix[4][1];
            if (matrix[4][11] != 0) {
                position3 *= (tpage2fpage * matrix[4][11]);
            }
            if (matrix[4][12] != 0) {
                position3 *= (fpos2tpage * matrix[4][12]);
            }
            position3 = roundToTwo(position3);
            position5 = (fpageCpc * matrix[6][4] + tpageCpc * matrix[6][5]
                    + fposCpc * matrix[6][6] + average * matrix[6][7] + position4
                    * matrix[6][8] + position1 * matrix[6][9] + position7
                    * matrix[6][10]) /
                    (matrix[6][4] + matrix[6][5] + matrix[6][6] + matrix[6][7]
                            + matrix[6][8] + matrix[6][9] + matrix[6][10])
                    * matrix[6][1];
            if (matrix[6][11] != 0) {
                position5 *= (tpage2fpage * matrix[6][11]);
            }
            if (matrix[6][12] != 0) {
                position5 *= (fpos2tpage * matrix[6][12]);
            }
            position5 = roundToTwo(position5);
            position6 = (fpageCpc * matrix[7][4] + tpageCpc * matrix[7][5]
                    + fposCpc * matrix[7][6] + average * matrix[7][7] + position4
                    * matrix[7][8] + position1 * matrix[7][9] + position7
                    * matrix[7][10]) /
                    (matrix[7][4] + matrix[7][5] + matrix[7][6] + matrix[7][7]
                            + matrix[7][8] + matrix[7][9] + matrix[7][10])
                    * matrix[7][1];
            if (matrix[7][11] != 0) {
                position6 *= (tpage2fpage * matrix[7][11]);
            }
            if (matrix[7][12] != 0) {
                position6 *= (fpos2tpage * matrix[7][12]);
            }
            position6 = roundToTwo(position6);
            position7 = (fpageCpc * matrix[8][4] + tpageCpc * matrix[8][5]
                    + fposCpc * matrix[8][6] + average * matrix[8][7] + position4
                    * matrix[8][8] + position1 * matrix[8][9] + position7
                    * matrix[8][10]) /
                    (matrix[8][4] + matrix[8][5] + matrix[8][6] + matrix[8][7]
                            + matrix[8][8] + matrix[8][9] + matrix[8][10])
                    * matrix[8][1];
            if (matrix[8][11] != 0) {
                position7 *= (tpage2fpage * matrix[8][11]);
            }
            if (matrix[8][12] != 0) {
                position7 *= (fpos2tpage * matrix[8][12]);
            }
            position7 = roundToTwo(position7);
            position8 = (fpageCpc * matrix[9][4] + tpageCpc * matrix[9][5]
                    + fposCpc * matrix[9][6] + average * matrix[9][7] + position4
                    * matrix[9][8] + position1 * matrix[9][9] + position7
                    * matrix[9][10]) /
                    (matrix[9][4] + matrix[9][5] + matrix[9][6] + matrix[9][7]
                            + matrix[9][8] + matrix[9][9] + matrix[9][10])
                    * matrix[9][1];
            if (matrix[9][11] != 0) {
                position8 *= (tpage2fpage * matrix[9][11]);
            }
            if (matrix[9][12] != 0) {
                position8 *= (fpos2tpage * matrix[9][12]);
            }
            position8 = roundToTwo(position8);
            position9 = (fpageCpc * matrix[10][4] + tpageCpc * matrix[10][5]
                    + fposCpc * matrix[10][6] + average * matrix[10][7] + position4
                    * matrix[10][8] + position1 * matrix[10][9] + position7
                    * matrix[10][10]) /
                    (matrix[10][4] + matrix[10][5] + matrix[10][6]
                            + matrix[10][7] + matrix[10][8] + matrix[10][9] + matrix[10][10])
                    * matrix[10][1];
            if (matrix[10][11] != 0) {
                position9 *= (tpage2fpage * matrix[10][11]);
            }
            if (matrix[10][12] != 0) {
                position9 *= (fpos2tpage * matrix[10][12]);
            }
            position9 = roundToTwo(position9);
            position10 = (fpageCpc * matrix[11][4] + tpageCpc * matrix[11][5]
                    + fposCpc * matrix[11][6] + average * matrix[11][7] + position4
                    * matrix[11][8] + position1 * matrix[11][9] + position7
                    * matrix[11][10]) /
                    (matrix[11][4] + matrix[11][5] + matrix[11][6]
                            + matrix[11][7] + matrix[11][8] + matrix[11][9] + matrix[11][10])
                    * matrix[11][1];
            if (matrix[11][11] != 0) {
                position10 *= (tpage2fpage * matrix[11][11]);
            }
            if (matrix[11][12] != 0) {
                position10 *= (fpos2tpage * matrix[11][12]);
            }
            position10 = roundToTwo(position10);
            var bid = 0;
            if (expectedPosition == 1) {
                bid = roundToTwo(position1);
            } else if (expectedPosition == 2) {
                bid = roundToTwo(position2);
            } else if (expectedPosition == 3) {
                bid = roundToTwo(position3);
            } else if (expectedPosition == 4) {
                bid = roundToTwo(position4);
            } else if (expectedPosition == 5) {
                bid = roundToTwo(position5);
            } else if (expectedPosition == 6) {
                bid = roundToTwo(position6);
            } else if (expectedPosition == 7) {
                bid = roundToTwo(position7);
            } else if (expectedPosition == 8) {
                bid = roundToTwo(position8);
            } else if (expectedPosition == 9) {
                bid = roundToTwo(position9);
            } else if (expectedPosition == 10) {
                bid = roundToTwo(position10);
            }
            var upperLimit = 0.01;
            var lowerLimit = 0.01;
            if (keywordKpi.isKS('oka1')) {
                okaCoef = ypoxrArray[1];
            } else if (keywordKpi.isKS('oka2')) {
                okaCoef = ypoxrArray[2];
            } else if (keywordKpi.isKS('okm1')) {
                okmCoef = ypoxrArray[3];
            } else if (keywordKpi.isKS('okm2')) {
                okmCoef = ypoxrArray[4];
            } else if (keywordKpi.isKS('okm3')) {
                okmCoef = ypoxrArray[5];
            } else if (keywordKpi.isKS('okm4')) {
                okmCoef = ypoxrArray[6];
            } else if (keywordKpi.isKS('okm5')) {
                okmCoef = ypoxrArray[7];
            } else if (keywordKpi.isKS('okt1')) {
                oktCoef = ypoxrArray[8];
            } else if (keywordKpi.isKS('okt2')) {
                oktCoef = ypoxrArray[9];
            } else if (keywordKpi.isKS('ya01')) {
                yaCoef = ypoxrArray[10];
            } else if (keywordKpi.isKS('ya02')) {
                yaCoef = ypoxrArray[11];
            } else if (keywordKpi.isKS('ya03')) {
                yaCoef = ypoxrArray[12];
            } else if (keywordKpi.isKS('ya04')) {
                yaCoef = ypoxrArray[13];
            } else if (keywordKpi.isKS('ya05')) {
                yaCoef = ypoxrArray[14];
            } else if (keywordKpi.isKS('ya06')) {
                yaCoef = ypoxrArray[15];
            } else if (keywordKpi.isKS('ya07')) {
                yaCoef = ypoxrArray[16];
            } else if (keywordKpi.isKS('ya08')) {
                yaCoef = ypoxrArray[17];
            } else if (keywordKpi.isKS('ya09')) {
                yaCoef = ypoxrArray[18];
            } else if (keywordKpi.isKS('ya10')) {
                yaCoef = ypoxrArray[19];
            } else if (keywordKpi.isKS('ya11')) {
                yaCoef = ypoxrArray[20];
            } else if (keywordKpi.isKS('ya12')) {
                yaCoef = ypoxrArray[21];
            } else if (keywordKpi.isKS('ya13')) {
                yaCoef = ypoxrArray[22];
            } else if (keywordKpi.isKS('ya14')) {
                yaCoef = ypoxrArray[23];
            } else if (keywordKpi.isKS('ya15')) {
                yaCoef = ypoxrArray[24];
            } else if (keywordKpi.isKS('ya16')) {
                yaCoef = ypoxrArray[25];
            } else if (keywordKpi.isKS('ym01')) {
                ymCoef = ypoxrArray[26];
            } else if (keywordKpi.isKS('ym02')) {
                ymCoef = ypoxrArray[27];
            } else if (keywordKpi.isKS('ym03')) {
                ymCoef = ypoxrArray[28];
            } else if (keywordKpi.isKS('ym04')) {
                ymCoef = ypoxrArray[29];
            } else if (keywordKpi.isKS('ym05')) {
                ymCoef = ypoxrArray[30];
            } else if (keywordKpi.isKS('ym06')) {
                ymCoef = ypoxrArray[31];
            } else if (keywordKpi.isKS('ym07')) {
                ymCoef = ypoxrArray[32];
            } else if (keywordKpi.isKS('ym08')) {
                ymCoef = ypoxrArray[33];
            } else if (keywordKpi.isKS('ym09')) {
                ymCoef = ypoxrArray[34];
            } else if (keywordKpi.isKS('ym10')) {
                ymCoef = ypoxrArray[35];
            } else if (keywordKpi.isKS('ym11')) {
                ymCoef = ypoxrArray[36];
            } else if (keywordKpi.isKS('ym12')) {
                ymCoef = ypoxrArray[37];
            } else if (keywordKpi.isKS('ym13')) {
                ymCoef = ypoxrArray[38];
            } else if (keywordKpi.isKS('ym14')) {
                ymCoef = ypoxrArray[39];
            } else if (keywordKpi.isKS('ym15')) {
                ymCoef = ypoxrArray[40];
            } else if (keywordKpi.isKS('ym16')) {
                ymCoef = ypoxrArray[41];
            } else if (keywordKpi.isKS('ym17')) {
                ymCoef = ypoxrArray[42];
            } else if (keywordKpi.isKS('ym18')) {
                ymCoef = ypoxrArray[43];
            } else if (keywordKpi.isKS('ym19')) {
                ymCoef = ypoxrArray[44];
            } else if (keywordKpi.isKS('ym20')) {
                ymCoef = ypoxrArray[45];
            } else if (keywordKpi.isKS('ym21')) {
                ymCoef = ypoxrArray[46];
            } else if (keywordKpi.isKS('ym22')) {
                ymCoef = ypoxrArray[47];
            } else if (keywordKpi.isKS('ym23')) {
                ymCoef = ypoxrArray[48];
            } else if (keywordKpi.isKS('ym24')) {
                ymCoef = ypoxrArray[49];
            } else if (keywordKpi.isKS('ym25')) {
                ymCoef = ypoxrArray[50];
            } else if (keywordKpi.isKS('ym26')) {
                ymCoef = ypoxrArray[51];
            } else if (keywordKpi.isKS('ym27')) {
                ymCoef = ypoxrArray[52];
            } else if (keywordKpi.isKS('ym28')) {
                ymCoef = ypoxrArray[53];
            } else if (keywordKpi.isKS('ym29')) {
                ymCoef = ypoxrArray[54];
            } else if (keywordKpi.isKS('za01')) {
                zaCoef = ypoxrArray[55];
            } else if (keywordKpi.isKS('zkt1')) {
                zktCoef = ypoxrArray[56];
            } else if (keywordKpi.isKS('zm01')) {
                zmCoef = ypoxrArray[57];
            } else if (keywordKpi.isKS('za01')) {
                zaCoef = ypoxrArray[58];
            } else if (keywordKpi.isKS('zkt2')) {
                zktCoef = ypoxrArray[59];
            } else if (keywordKpi.isKS('zm02')) {
                zmCoef = ypoxrArray[60];
            } else if (keywordKpi.isKS('za03')) {
                zaCoef = ypoxrArray[61];
            } else if (keywordKpi.isKS('zkt3')) {
                zktCoef = ypoxrArray[62];
            } else if (keywordKpi.isKS('zm03')) {
                zmCoef = ypoxrArray[63];
            }
            var bidsAverage = roundToTwo((bid + maxCpc) / 2);
            if (keywordKpi.isKS('oka')) {
                if (maxCpc < upperLimit) {
                    bid = bidsAverage;
                    if (bid < roundToTwo(maxCpc * okaCoef)) {
                        bid = roundToTwo(maxCpc * okaCoef);
                    }
                    if (bid > upperLimit) {
                        bid = upperLimit;
                    }
                } else {
                    bid = roundToTwo(maxCpc * okaCoef);
                }
            } else if (keywordKpi.isKS('okm')) {
                bid = roundToTwo(maxCpc * okmCoef);
                if (bid < lowerLimit) {
                    bid = lowerLimit;
                }
            } else if (keywordKpi.isKS('okt') && oktCoef > 1) {
                if (maxCpc < upperLimit) {
                    bid = bidsAverage;
                    if (bid < roundToTwo(maxCpc * oktCoef)) {
                        bid = roundToTwo(maxCpc * oktCoef);
                    }
                    if (bid > upperLimit) {
                        bid = upperLimit;
                    }
                } else {
                    bid = roundToTwo(maxCpc * oktCoef);
                }
            } else if (keywordKpi.isKS('okt') && oktCoef < 1) {
                bid = roundToTwo(maxCpc * oktCoef);
                if (bid < lowerLimit) {
                    bid = lowerLimit;
                }
            } else if (keywordKpi.isKS('okt') && oktCoef == 1) {
                continue;
            } else if (keywordKpi.isKS('ya')) {
                if (maxCpc < upperLimit) {
                    bid = bidsAverage;
                    if (bid < roundToTwo(maxCpc * yaCoef)) {
                        bid = roundToTwo(maxCpc * yaCoef);
                    }
                    if (bid > upperLimit) {
                        bid = upperLimit;
                    }
                } else {
                    bid = roundToTwo(maxCpc * yaCoef);
                }
            } else if (keywordKpi.isKS('ym')) {
                bid = roundToTwo(maxCpc * ymCoef);
                if (bid < lowerLimit) {
                    bid = lowerLimit;
                }
            } else if (keywordKpi.isKS('za')) {
                if (maxCpc < upperLimit) {
                    bid = bidsAverage;
                    if (bid < roundToTwo(maxCpc * zaCoef)) {
                        bid = roundToTwo(maxCpc * zaCoef);
                    }
                    if (bid > upperLimit) {
                        bid = upperLimit;
                    }
                } else {
                    bid = roundToTwo(maxCpc * zaCoef);
                }
            } else if (keywordKpi.isKS('zkt') && zktCoef > 1) {
                if (maxCpc < upperLimit) {
                    bid = bidsAverage;
                    if (bid < roundToTwo(maxCpc * zktCoef)) {
                        bid = roundToTwo(maxCpc * zktCoef);
                    }
                    if (bid > upperLimit) {
                        bid = upperLimit;
                    }
                } else {
                    bid = roundToTwo(maxCpc * zktCoef);
                }
            } else if (keywordKpi.isKS('zkt') && zktCoef < 1) {
                bid = roundToTwo(maxCpc * zktCoef);
                if (bid < lowerLimit) {
                    bid = lowerLimit;
                }
            } else if (keywordKpi.isKS('zkt') && zktCoef == 1) {
                continue;
            } else if (keywordKpi.isKS('zm')) {
                bid = roundToTwo(maxCpc * zmCoef);
                if (bid < lowerLimit) {
                    bid = lowerLimit;
                }
            } else {
                continue;
            }
            if (bid > fposCpc * 1.2) {
                bid = fposCpc * 1.2;
            }
            bidsExecutor.addAValue(adGrId, kwId, bid);
        }
    }
    bidsExecutor.flush();
    BD.TIMESTAMP.stamp('bidder ' + '&' + fKey + '=' + fValue, 'Finished');
}
function complementaryBidder(fKey, fValue) {
    BD.TIMESTAMP.stamp('complementaryBidder ' + '&' + fKey + '=' + fValue, 'Started');
    if (fKey == null || fValue == null) {
        throw "NullPointerExeption";
    } else {
        Logger.log("&" + fKey + "=" + fValue);
    }
    var dateFormater = new AWQLDateFormatter();
    var awqlBuilder = new AWQLQueryBuilder();
    var ypoxrArray = SpreadsheetApp.openByUrl(BD.TRANS_MAP_URL)
            .getSheetByName("YpoxrewtikaV7").getRange("B:B").getValues();
    var keywordKpi = new KpiExtractor();
    var adgroupKpi = new KpiExtractor();
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    var bidsExecutor = new KeywordBidder();
    bigQuery.loadWithFilters(new And(new BQ_Like(fKey, fValue), new Not(new BQ_Like('trf', ''))));
    var allIds = bigQuery.extractIds();
    var tempArray = [];
    while (allIds.length > 0) {
        if (allIds.length > BD.CHANGES_PAGESIZE) {
            tempArray = allIds.splice(0, BD.CHANGES_PAGESIZE);
        } else {
            tempArray = allIds.splice(0, allIds.length);
        }
        var kIds = [];
        var aIds = [];
        for (var i in tempArray) {
            aIds[i] = tempArray[i][0];
            kIds[i] = tempArray[i][1];
        }
        awqlBuilder.addAttribute("Id");
        awqlBuilder.addAttribute("AdGroupId");
        awqlBuilder.addAttribute("AdGroupName");
        awqlBuilder.addAttribute("CpcBid");
        awqlBuilder.addAttribute("FirstPageCpc");
        awqlBuilder.addAttribute("FirstPositionCpc");
        awqlBuilder.addAttribute("TopOfPageCpc");
        awqlBuilder.setReportType("KEYWORDS_PERFORMANCE_REPORT");
        awqlBuilder.addCondition("AdGroupId IN [" + aIds + "]");
        awqlBuilder.addCondition("Id IN [" + kIds + "]");
        awqlBuilder.addCondition("CampaignStatus != REMOVED");
        awqlBuilder.addCondition("AdGroupStatus != REMOVED");
        awqlBuilder.addCondition("Status != REMOVED");
        awqlBuilder.addCondition("CampaignName DOES_NOT_CONTAIN 'ZZZ'");
        awqlBuilder.addCondition("Impressions = 0");
        awqlBuilder.setStartDate(dateFormater.getStringByDaysBack(BD.WEEK));
        awqlBuilder.setEndDate(dateFormater.getTodayAsString());
        var report = AdWordsApp.report(awqlBuilder.buildQuery());
        var rows = report.rows();
        while (rows.hasNext()) {
            var item = rows.next();
            var kwId = item.Id;
            var adGrId = item.AdGroupId;
            var adrgName = item.AdGroupName;
            adgroupKpi.loadContainer(adrgName);
            var url = bigQuery.getParameter(adGrId, kwId);
            url = (url === undefined) ? "" : url;
            keywordKpi.loadContainer(url);
            var maxCpc = (parseFloat((item.CpcBid).replace(/,/g, "")));
            var fpageCpc = (parseFloat((item.FirstPageCpc).replace(/,/g, "")));
            var tpageCpc = (parseFloat((item.TopOfPageCpc).replace(/,/g, "")));
            var fposCpc = (parseFloat((item.FirstPositionCpc).replace(/,/g, "")));
            if (isNaN(fpageCpc) || fpageCpc == 0) {
                fpageCpc = 0.25;
            }
            if (isNaN(tpageCpc) || tpageCpc == 0) {
                tpageCpc = fpageCpc * 1.25;
            }
            if (isNaN(fposCpc) || fposCpc == 0) {
                fposCpc = tpageCpc * 1.4;
            }
            if (fpageCpc < 0.25) {
                fpageCpc = 0.25;
            } else if (fpageCpc > 7) {
                fpageCpc = 7;
            }
            if (tpageCpc < 0.50) {
                tpageCpc = 0.50;
            } else if (tpageCpc > 15) {
                tpageCpc = 15;
            }
            if (fposCpc < 0.50) {
                fposCpc = 0.50;
            } else if (fposCpc > 21) {
                fposCpc = 21;
            }

            var bid = maxCpc;
            if (keywordKpi.isTT('p0') || keywordKpi.isTT('p1') || keywordKpi.isTT('p2')) {
                if (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1') || adgroupKpi.isSD('p2')) {
                    if (maxCpc < fposCpc * 1.2) {
                        bid = maxCpc * ypoxrArray[55];
                        if (bid > fposCpc * 1.2) {
                            bid = fposCpc * 1.2;
                        }
                    }
                } else if (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4')) {
                    if (maxCpc < fposCpc * 1.1) {
                        bid = maxCpc * ypoxrArray[56];
                        if (bid > fposCpc * 1.1) {
                            bid = fposCpc * 1.1;
                        }
                    }
                } else if (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n')) {
                    coef = 1;
                    if (maxCpc < fposCpc * 1) {
                        bid = maxCpc * ypoxrArray[57];
                        if (bid > fposCpc * 1) {
                            bid = fposCpc * 1;
                        }
                    }
                } else {
                    continue;
                }
            } else if (keywordKpi.isTT('p3') || keywordKpi.isTT('m4')) {
                if (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1') || adgroupKpi.isSD('p2')) {
                    if (maxCpc < tpageCpc * 1.2) {
                        bid = maxCpc * ypoxrArray[58];
                        if (bid > tpageCpc * 1.2) {
                            bid = tpageCpc * 1.2;
                        }
                    }
                } else if (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4')) {
                    if (maxCpc < tpageCpc * 1.1) {
                        bid = maxCpc * ypoxrArray[59];
                        if (bid > tpageCpc * 1.1) {
                            bid = tpageCpc * 1.1;
                        }
                    }
                } else if (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n')) {
                    coef = 1;
                    if (maxCpc < tpageCpc * 1) {
                        bid = maxCpc * ypoxrArray[60];
                        if (bid > tpageCpc * 1) {
                            bid = tpageCpc * 1;
                        }
                    }
                } else {
                    continue;
                }
            } else if (keywordKpi.isTT('m5') || keywordKpi.isTT('n')) {
                if (adgroupKpi.isSD('p0') || adgroupKpi.isSD('p1') || adgroupKpi.isSD('p2')) {
                    if (maxCpc < fpageCpc * 1.2) {
                        bid = maxCpc * ypoxrArray[61];
                        if (bid > fpageCpc * 1.2) {
                            bid = fpageCpc * 1.2;
                        }
                    }
                } else if (adgroupKpi.isSD('p3') || adgroupKpi.isSD('m4')) {
                    if (maxCpc < fpageCpc * 1.1) {
                        bid = maxCpc * ypoxrArray[62];
                        if (bid > fpageCpc * 1.1) {
                            bid = fpageCpc * 1.1;
                        }
                    }
                } else if (adgroupKpi.isSD('m5') || adgroupKpi.isSD('n')) {
                    coef = 1;
                    if (maxCpc < fpageCpc * 1) {
                        bid = maxCpc * ypoxrArray[63];
                        if (bid > fpageCpc * 1) {
                            bid = fpageCpc * 1;
                        }
                    }
                } else {
                    continue;
                }
            } else {
                continue;
            }
            bidsExecutor.addAValue(adGrId, kwId, bid);
        }
    }
    bidsExecutor.flush();
    BD.TIMESTAMP.stamp('complementaryBidder ' + '&' + fKey + '=' + fValue, 'Finished');
}
function logingService() {
    BD.TIMESTAMP.stamp('Logging Service', 'Started');
    var bigQuery = new BigQueryKeywords(BD.BQ_PROJECT_ID);
    var acc = AdWordsApp.currentAccount().getCustomerId().replace(/-/g, "");
    var accname = AdWordsApp.currentAccount().getName();

    var logObj = {ver: BD.VERSION.toString(), id: acc, name: accname};

    //individual calls
    bigQuery.loadWithFilters(new BQ_Like('trf', ''));
    var trfReport = bigQuery.extractIds().length;
    logObj.trf = trfReport.toString();
    //
    for (var tmp = 1; tmp < 8; tmp++) {
        var setname = tmp + 'i';
        bigQuery.loadWithFilters(new BQ_Like('trf', setname));
        var tmpreport = bigQuery.extractIds().length;
        logObj['i' + tmp] = tmpreport.toString();

    }
    //
    bigQuery.loadWithFilters(new BQ_Like('cp', ''));
    var cpReport = bigQuery.extractIds().length;
    logObj.cp = cpReport.toString();

    bigQuery.loadWithFilters(new BQ_Like('ks', ''));
    var ksReport = bigQuery.extractIds().length;
    logObj.ks = ksReport.toString();
    //
    Logger.log('CREATING JDBC CONNECTION');
    try {
        var conn = Jdbc.getConnection(BD.JDBC.URL.BASE + BD.JDBC.URL.SCHEMA.LOG, BD.JDBC.USER, BD.JDBC.PASS);
        var stmt = conn.prepareStatement('CALL insert_final_log(?, ?)');
        stmt.setLong(1, acc);
        stmt.setString(2, JSON.stringify(logObj));
        stmt.addBatch();
        var batch = stmt.executeBatch();
        conn.close();
    } catch (e) {
        Logger.log('ERROR : CATCH BLOCK : ' + e);
    }
    Logger.log('INSERTING : ' + JSON.stringify(logObj));
    BD.TIMESTAMP.stamp('Logging Service', 'Finished');
}
