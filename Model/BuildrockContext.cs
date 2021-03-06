using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BuildrockPortal.Model
{
    public partial class BuildrockContext : DbContext
    {
        public BuildrockContext(DbContextOptions<BuildrockContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PortalLogin> PortalLogin { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<Vendors> Vendors { get; set; }
        public virtual DbSet<ItemsMst> ItemsMst { get; set; }
    }
}
