using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuildrockPortal.Model;

namespace BuildrockPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortalLoginsController : ControllerBase
    {
        private readonly BuildrockContext _context;

        public PortalLoginsController(BuildrockContext context)
        {
            _context = context;
        }

        // GET: api/PortalLogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PortalLogin>>> GetPortalLogin()
        {
            return await _context.PortalLogin.ToListAsync();
        }

        // GET: api/PortalLogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PortalLogin>> GetPortalLogin(int id)
        {
            var portalLogin = await _context.PortalLogin.FindAsync(id);

            if (portalLogin == null)
            {
                return NotFound();
            }

            return portalLogin;
        }

        // PUT: api/PortalLogins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPortalLogin(int id, PortalLogin portalLogin)
        {
            if (id != portalLogin.Id)
            {
                return BadRequest();
            }

            _context.Entry(portalLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PortalLoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PortalLogins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PortalLogin>> PostPortalLogin(PortalLogin portalLogin)
        {
            _context.PortalLogin.Add(portalLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPortalLogin", new { id = portalLogin.Id }, portalLogin);
        }

        // DELETE: api/PortalLogins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PortalLogin>> DeletePortalLogin(int id)
        {
            var portalLogin = await _context.PortalLogin.FindAsync(id);
            if (portalLogin == null)
            {
                return NotFound();
            }

            _context.PortalLogin.Remove(portalLogin);
            await _context.SaveChangesAsync();

            return portalLogin;
        }

        private bool PortalLoginExists(int id)
        {
            return _context.PortalLogin.Any(e => e.Id == id);
        }
    }
}
