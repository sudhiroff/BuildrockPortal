using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BuildrockPortal.Model
{
    [Table("Portal_Login")]
    public partial class PortalLogin
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        public string EmailId { get; set; }
        [Required]
        [StringLength(10)]
        public string LoginPin { get; set; }
        [Required]
        [StringLength(20)]
        public string Password { get; set; }
        [Required]
        [StringLength(15)]
        public string MobileNo { get; set; }
        [Required]
        [StringLength(25)]
        public string Type { get; set; }
        public bool Status { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedDate { get; set; }
    }
}
