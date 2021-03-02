using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace HttpClientSample
{
    public class Produto
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public long Categoria_Id { get; set; }
    }

    class Program
    {
        static HttpClient client = new HttpClient();

        static void ShowProduto(Produto produto)
        {
            Console.WriteLine($"Name: {produto.Nome}\tPrice: " +
                $"{produto.Preco}\tCategory: {produto.Categoria_Id}");
        }

        static async Task<Uri> CreateProdutoAsync(Produto produto)
        {
            HttpResponseMessage response = await client.PostAsJsonAsync(
                $"api/produtos", produto);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response.Headers.Location;
        }

        static async Task<Produto> GetProdutoAsync(long id)
        {
            Produto produto = null;
            HttpResponseMessage response = await client.GetAsync(
                $"api/produtos/{id}");
            if (response.IsSuccessStatusCode)
            {
                produto = await response.Content.ReadAsAsync<Produto>();
            }
            return produto;
        }

        static async Task<Produto> UpdateProdutoAsync(Produto produto)
        {
            HttpResponseMessage response = await client.PutAsJsonAsync(
                $"api/produtos/{produto.Id}", produto);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated produto from the response body.
            produto = await response.Content.ReadAsAsync<Produto>();
            return produto;
        }

        static async Task<HttpStatusCode> DeleteProdutoAsync(string id)
        {
            HttpResponseMessage response = await client.DeleteAsync(
                $"api/produtos/{id}");
            return response.StatusCode;
        }

        static void Main()
        {
            RunAsync().GetAwaiter().GetResult();
        }

        static async Task RunAsync()
        {
            // Update port # in the following line.
            client.BaseAddress = new Uri("https://localhost:44396/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            try
            {
                // Create a new produto
                //Produto produto = new Produto
                //{
                //    Id= 5,
                //    Nome = "Teste de inclusao pelo Console",
                //    Preco = 100,
                //    Categoria_Id = 2
                //};

                //var url = await CreateProdutoAsync(produto);
                //Console.WriteLine($"Created at {url}");

                // Get the produto
                Produto produto = await GetProdutoAsync(5);
                ShowProduto(produto);

                // Update the produto
                Console.WriteLine("Updating price...");
                produto.Preco = 120;
                await UpdateProdutoAsync(produto);

                //// Get the updated produto
                produto = await GetProdutoAsync(5);
                ShowProduto(produto);

                //// Delete the produto
                //var statusCode = await DeleteProdutoAsync(produto.Id);
                //Console.WriteLine($"Deleted (HTTP Status = {(int)statusCode})");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Console.ReadLine();
        }
    }
}