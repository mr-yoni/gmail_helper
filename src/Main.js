const DEBUG = true

function processThreads(threads, appProcedure) {
    if ( !threads ) {
        return;
    }
    if ( threads.length > 100 ) {
        appProcedure(threads.slice(0, 99))
        processThreads(threads.slice(100), appProcedure)
    } else {
        appProcedure(threads)
    }
}

function processQueries(queries, appProcedure) {
    while ( queries.length > 0 ) {
        processThreads(GmailApp.search(queries.pop()), appProcedure)
    }
}

function appDebug() {
}

function main() {
    if (DEBUG) {
        processQueries(Queries.DEBUG, appDebug)
    }
    else {
        processQueries(Queries.DELETE, GmailApp.moveThreadsToTrash)
        processQueries(Queries.ARCHIVE, GmailApp.moveThreadsToArchive)
    }
}