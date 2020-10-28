using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BuildrockPortal.Model
{
    public partial class BuildrockContext : DbContext
    {
        public BuildrockContext()
        {
        }

        public BuildrockContext(DbContextOptions<BuildrockContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PortalLogin> PortalLogin { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=SUDHIR\\SQLEXPRESS;Database=buildrock_portal;User ID=sa;Password=kumar");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PortalLogin>(entity =>
            {
                entity.Property(e => e.EmailId).IsUnicode(false);

                entity.Property(e => e.LoginPin).IsUnicode(false);

                entity.Property(e => e.MobileNo).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.Type).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
