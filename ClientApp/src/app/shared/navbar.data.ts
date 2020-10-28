export const nav = [
    {
        id: 1, title: "Employee Self Service", childs:
            [
                { title: "Profile", path: "" },
                { title: "Leave Tracker", path: '' },
                { title: "Expense Form", path: '' },
                { title: "Attandance Tracker", path: '' },
                { title: "Overtime and Extra hour", path: '' }
            ]
    },
    {
        id: 2, title: "Sales & Enquiry", childs:
            [
                { path: 'sales/customers', title: "New Customer Registration" },
                { path: 'sales/vendors', title: "New Vender Registration" },
                { path: '', title: "New sales enquiery" }
            ]
    },
    {
        id: 3, title: "Engineering Services", childs:
            [
                { path: '', title: "Product Development Tracker" },
                { path: '', title: "Internal Trial Reports" },
                { path: '', title: "Production Order" },
                { path: '', title: "Production Tracker" },
                { path: '', title: "For MTC Print Conc Admixture" },
                { path: '', title: "Standard Operating Procedure for Production" },
                { path: '', title: "Label Printing Conc. Admixture" }
            ]
    },
    {
        id: 4, title: "Account & Finance", childs:
            [
                { path: '', title: "Daily Standard Operating Procedure-Acc." },
                { path: '', title: "Monthly Status Report" },
                { path: '', title: "Tax Calender" },
                { path: '', title: "Internal Audit Checklist" }
            ]
    },
    {
        id: 5, title: "Logistic", childs:
            [
                { path: '', title: "Inward/Outward Register" },
                { path: '', title: "Manual Inventry Tracker" },
                { path: '', title: "Inventry & Warehouse Mgmt Checklist" },
                { path: '', title: "Local frieght & handling Charges" },
                { path: '', title: "Temp Labour/On Contract Labour Daily Wage Tracker" }
            ]
    },
    {
        id: 6, title: "Safety & Housekeeping", childs:
            [
                { path: '', title: "Daily Office & Washroom Cleaning Tracker" },
                { path: '', title: "Security and safety" }
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