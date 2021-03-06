using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuildrockPortal.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<PortalLogin>> PostUserLogin(PortalLogin portalLogin)
        {
            try
            {
                string email = portalLogin.EmailId;
                var result = await _context.PortalLogin.Where(x => x.EmailId == email).FirstOrDefaultAsync();
                if (result != null)
                {
                    if(portalLogin.Password== result.Password || portalLogin.Password == result.LoginPin)
                    {
                        return Ok(new
                        {
                            status = "success",
                            msg = "",
                            body = result
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
                        body = result
                    });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new {
                    status = "failed",
                    msg = ex,
                    body = ""
                });
            }
        }
    }
}
