using System;
using System.Collections.Generic;

namespace BuildrockPortal.Model
{
    public partial class PortalLogin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailId { get; set; }
        public string LoginPin { get; set; }
        public string Password { get; set; }
        public string MobileNo { get; set; }
        public string Type { get; set; }
        public bool Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
