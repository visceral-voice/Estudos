using System;
using System.Net.Http;
using System.Net.Http.Headers;
namespace Frontend.Helpers
{
    public class WebApiHttpClient
    {
        public const string WebApiBaseAddress = "https://localhost:44396/api/";
        public static HttpClient GetClient() {
            HttpClient client = new HttpClient
            {
                BaseAddress = new Uri(WebApiBaseAddress)
            };
            client.Timeout = TimeSpan.FromMinutes(10);
            client.DefaultRequestHeaders.Accept.Clear();
                      client.DefaultRequestHeaders.Accept.Add(new 
                          MediaTypeWithQualityHeaderValue("application/json")); 
                      return client; }
    }
}