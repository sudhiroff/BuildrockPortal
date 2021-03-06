using System;
using System.Collections.Generic;

namespace BuildrockPortal.Model
{
    public partial class ItemsMst
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Sku { get; set; }
        public string Unit { get; set; }
        public string Hsncode { get; set; }
        public decimal? SellingPrice { get; set; }
        public decimal? CostPrice { get; set; }
        public int? Gst { get; set; }
        public int? Igst { get; set; }
        public string CreatedBy { get; set; }
        public int? CreatedByName { get; set; }
        public bool? Status { get; set; }
    }
}
