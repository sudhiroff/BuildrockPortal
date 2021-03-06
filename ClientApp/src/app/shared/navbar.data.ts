export const nav = [
    {
        id: 1, title: "Employee Self Service", childs:
            [
                { title: "Profile", path: "work-progress" },
                { title: "Leave Tracker", path: 'work-progress' },
                { title: "Expense Form", path: 'work-progress' },
                { title: "Attandance Tracker", path: 'work-progress' },
                { title: "Overtime and Extra hour", path: 'work-progress' }
            ]
    },
    {
        id: 2, title: "Sales & Enquiry", childs:
            [
                { path: 'sales/customers', title: "Customers" },
                { path: 'sales/vendors', title: "Venders" },
                { path: 'work-progress', title: "New sales enquiery" }
            ]
    },
    {
        id: 3, title: "Engineering Services", childs:
            [
                { path: 'work-progress', title: "Product Development Tracker" },
                { path: 'work-progress', title: "Internal Trial Reports" },
                { path: 'work-progress', title: "Production Order" },
                { path: 'work-progress', title: "Production Tracker" },
                { path: 'work-progress', title: "For MTC Print Conc Admixture" },
                { path: 'work-progress', title: "Standard Operating Procedure for Production" },
                { path: 'work-progress', title: "Label Printing Conc. Admixture" }
            ]
    },
    {
        id: 4, title: "Account & Finance", childs:
            [
                { path: 'work-progress', title: "Daily Standard Operating Procedure-Acc." },
                { path: 'work-progress', title: "Monthly Status Report" },
                { path: 'work-progress', title: "Tax Calender" },
                { path: 'work-progress', title: "Internal Audit Checklist" }
            ]
    },
    {
        id: 5, title: "Logistic", childs:
            [
                { path: 'logistic/items', title: "Items" },
                { path: 'work-progress', title: "Inward/Outward Register" },
                { path: 'work-progress', title: "Manual Inventry Tracker" },
                { path: 'work-progress', title: "Inventry & Warehouse Mgmt Checklist" },
                { path: 'work-progress', title: "Local frieght & handling Charges" },
                { path: 'work-progress', title: "Temp Labour/On Contract Labour Daily Wage Tracker" }
            ]
    },
    {
        id: 6, title: "Safety & Housekeeping", childs:
            [
                { path: 'work-progress', title: "Daily Office & Washroom Cleaning Tracker" },
                { path: 'work-progress', title: "Security and safety" }
            ]
    },
    {
        id: 7, title: "Configuration", childs: [
            { path: 'config/user-list', title: "Users" },
            { path: 'config/new-user', title: "New user" },
            { path: 'config/roles', title: "Roles" }
        ]
    },
    { id: 8, title: "Reports", childs: [] }
];