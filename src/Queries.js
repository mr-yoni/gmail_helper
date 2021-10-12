var Queries = {
    DELETE: [
// delete old barchart emails
        ,"from:(@barchart.com) older_than:28d"
// delete old Quora emails
        ,"from:(digest-noreply@quora.com) older_than:4d"
// delete old deploy emails
        ,"label:Production older_than:6m"
    ],
    ARCHIVE: [
        ,"from:(notifier@fabric.io) label:Inbox older_than:3d"
        ,"from:(digest-noreply@quora.com) label:Inbox older_than:3d"
        ,"label:Google+ AND label:Inbox older_than:7d"
        ,"label:Support/Crashlytics AND label:Inbox older_than:3d"
        ,"label:Alerts AND label:Inbox older_than:7d"
        ,"label:\"Google Docs\" AND label:Inbox older_than:3d"
    ],
    DEBUG: [
    ]
}
