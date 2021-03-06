using System;
using System.Collections.Generic;

namespace BuildrockPortal.Model
{
    public partial class Vendors
    {
        public int Id { get; set; }
        public string VendorName { get; set; }
        public string CompanyName { get; set; }
        public string VendorEmail { get; set; }
        public string VendorPhone { get; set; }
        public string ContactPersonName { get; set; }
        public string ContactPersonEmail { get; set; }
        public string ContactPersonPhone { get; set; }
        public string BillingAttnName { get; set; }
        public string BillingAddress { get; set; }
        public string BillingCity { get; set; }
        public string BillingState { get; set; }
        public string BillingZip { get; set; }
        public string BillingPhone { get; set; }
        public string ShippingAttnName { get; set; }
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingState { get; set; }
        public string ShippingZip { get; set; }
        public string ShippingPhone { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int? CreatedById { get; set; }
    }
}
