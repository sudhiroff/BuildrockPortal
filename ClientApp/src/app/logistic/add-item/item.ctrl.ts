export const ctrls = [
    { id: "Type", title: "Type", type: "dropdown", 
    data:[{text:'Goods',value:'Goods'},{text:'Service',value:'Service'}], 
    isRequired: true },
    { id: "Name", title: "Name", type: "textbox", isRequired: true },
    { id: "Sku", title: "SKU", type: "textbox", isRequired: false },
    { id: "Unit", title: "Unit", type: "dropdown", isRequired: true,
     data:[
         {text:'Ltr',value:'Ltr'},
         {text:'Kg',value:'Kg'},
         {text:'Packet',value:'Packet'}
        ] 
    },
    { id: "Hsncode", title: "HSN Code", type: "textbox", isRequired: true },
    { id: "SellingPrice", title: "Selling Price", type: "textbox", isRequired: false,isNumeric:true },
    { id: "CostPrice", title: "Cost Price", type: "textbox", isRequired: false,isNumeric:true  },
    { id: "Gst", title: "GST", type: "textbox", isRequired: false,isNumeric:true  },
    { id: "Igst", title: "IGST", type: "textbox", isRequired: false,isNumeric:true  }
]