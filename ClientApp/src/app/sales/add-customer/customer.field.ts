export const ctrls = [    {
        "sec": 1,
        "items": [
            { id: "CustomerName", title: "Customer Name", type: "textbox", isRequired: true },
            { id: "CompanyName", title: "Company Name", type: "textbox", validation: [] },
            { id: "CustomerEmail", title: "Customer Email", type: "textbox", isEmail:true },
            { id: "CustomerPhone", title: "Customer Phone", type: "textbox", isRequired: true },
            { id: "ContactPersonName", title: "Contact Person Name", type: "textbox",isRequired: true, validation: [] },
            { id: "ContactPersonEmail", title: "Email", type: "textbox",isEmail:true },
            { id: "ContactPersonPhone", title: "Phone", type: "textbox", isRequired: true}
        ]
    },
    {
        "sec": 2,
        "items": [
            { id: "BillingAttnName", title: "Bill. Att. Name", type: "textbox", validation: [] },
            { id: "BillingAddress", title: "Address", type: "textbox", validation: [] },
            { id: "BillingCity", title: "City", type: "textbox", validation: [] },
            { id: "BillingState", title: "State", type: "textbox", validation: [] },
            { id: "BillingZip", title: "Zip", type: "textbox", validation: [] },
            { id: "BillingPhone", title: "Phone", type: "textbox", validation: [] },
        ]
    },
    {
        "sec": 3,
        "items": [
            { id: "ShippingAttnName", title: "Ship. Att. Name", type: "textbox", validation: [] },
            { id: "ShippingAddress", title: "Address", type: "textbox", validation: [] },
            { id: "ShippingCity", title: "City", type: "textbox", validation: [] },
            { id: "ShippingState", title: "State", type: "textbox", validation: [] },
            { id: "ShippingZip", title: "Zip", type: "textbox", validation: [] },
            { id: "ShippingPhone", title: "Phone", type: "textbox", validation: [] }
        ]
    }
]