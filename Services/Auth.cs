using BuildrockPortal.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BuildrockPortal.Services
{
    public class Auth
    {
        //private readonly BuildrockContext _context;
        //private readonly IConfiguration _config;
        public BuildrockContext Context { get; }
        public IConfiguration _config { get; }
        public Auth(BuildrockContext context)
        {
            Context = context;
        }

        public Auth(BuildrockContext context, IConfiguration config)
        {
             Context = context;
            _config = config;
        }       

        internal PortalLogin AuthticateUser(string email)
        {
            return Context.PortalLogin.Where(x => x.EmailId == email).FirstOrDefault();
        }

        
        }
    }
