using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BuildrockPortal
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.UseKestrel(opts =>
                    {
                        // Bind directly to a socket handle or Unix socket
                        // opts.ListenHandle(123554);
                        // opts.ListenUnixSocket("/tmp/kestrel-test.sock");
                        //opts.Listen(System.Net.IPAddress.Loopback, port: 5002);
                        opts.ListenAnyIP(80);
                        opts.ListenAnyIP(443,opt=>opt.UseHttps());
                        //opts.ListenLocalhost(5004, opts => opts.UseHttps());
                        //opts.ListenLocalhost(5005, opts => opts.UseHttps());
                    });
                });
    }
}
