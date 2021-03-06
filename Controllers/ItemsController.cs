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
    public class ItemsController : ControllerBase
    {
        private readonly BuildrockContext _context;

        public ItemsController(BuildrockContext context)
        {
            _context = context;
        }

        // GET: api/Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemsMst>>> GetItemsMsts()
        {
            return await _context.ItemsMst.ToListAsync();
        }

        // GET: api/Items/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemsMst>> GetItemsMst(int id)
        {
            var itemsMst = await _context.ItemsMst.FindAsync(id);

            if (itemsMst == null)
            {
                return NotFound();
            }

            return itemsMst;
        }

        // PUT: api/Items/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemsMst(int id, ItemsMst itemsMst)
        {
            if (id != itemsMst.Id)
            {
                return BadRequest();
            }

            _context.Entry(itemsMst).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemsMstExists(id))
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

        // POST: api/Items
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ItemsMst>> PostItemsMst(ItemsMst itemsMst)
        {
            itemsMst.CreatedBy = "Sudhir";
            itemsMst.CreatedByName = 1;
            itemsMst.Status = true;
            _context.ItemsMst.Add(itemsMst);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemsMst", new { id = itemsMst.Id }, itemsMst);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ItemsMst>> DeleteItemsMst(int id)
        {
            var itemsMst = await _context.ItemsMst.FindAsync(id);
            if (itemsMst == null)
            {
                return NotFound();
            }

            _context.ItemsMst.Remove(itemsMst);
            await _context.SaveChangesAsync();

            return itemsMst;
        }

        private bool ItemsMstExists(int id)
        {
            return _context.ItemsMst.Any(e => e.Id == id);
        }
    }
}
