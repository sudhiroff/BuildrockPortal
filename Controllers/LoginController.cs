using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BuildrockPortal.Model;
using BuildrockPortal.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;

namespace BuildrockPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly BuildrockContext _context;

        public LoginController(BuildrockContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<PortalLogin> PostUserLogin(PortalLogin portalLogin)
        {
            try
            {
                 PortalLogin userInfo =_context.PortalLogin.Where(x => x.EmailId == portalLogin.EmailId).FirstOrDefault();
                if (userInfo != null)
                {
                    if (portalLogin.Password == userInfo.Password || portalLogin.Password == userInfo.LoginPin)
                    {
                        var tokenString = GetToken(userInfo);
                        return Ok(new
                        {
                            status = "success", msg = "", body = new {Id=userInfo.Id,Name=userInfo.Name,Email=userInfo.EmailId,token=tokenString}
                        });

                    }
                    else
                    {
                        return Ok(new
                        {
                            status = "failed",
                            msg = "Invalid email id or password",
                            body = ""
                        });
                    }
                }
                else
                {
                    return Ok(new
                    {
                        status = "failed",
                        msg = "Not found any user",
                        body = userInfo
                    });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    status = "failed",
                    msg = ex,
                    body = ""
                });
            }
        }

        public String GetToken(PortalLogin userInfo)
        {
            string key = "buildrock@india2021"; //Secret key which will be used later during validation    
            var issuer = "http://keyflow.in";  //normally this will be your site URL                
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            //Create a List of Claims, Keep claims name short    
            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            permClaims.Add(new Claim("Email", userInfo.EmailId));
            permClaims.Add(new Claim("Id", userInfo.Id.ToString()));
            permClaims.Add(new Claim("Name", userInfo.Name));

            //Create Security Token object by giving required parameters    
            var token = new JwtSecurityToken(
                issuer:issuer,
                audience:issuer,
                claims:permClaims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: credentials);
            var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt_token;
        }
    }
    }
