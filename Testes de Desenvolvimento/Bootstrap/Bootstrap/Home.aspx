<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="Bootstrap.Home" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <!--CSS Bootstrap-->
    <link href="Content/CSS/Bootstrap.css" rel="stylesheet" />
        <!--Jquery-->
    <script src="scripts/JS/jquery-1.12.4.min.js"></script>
    <!--JavaScript Bootstrap-->
    <script src="scripts/JS/Bootstrap.js"></script>
</head>
<body>
    <div align="center">
        <h4>Listagem 2. Utilizando Glyphicons como decoração</h4>
        <button type="button" class="btn btn-default" aria-label="Alinhar na esquerda">
            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
        </button>


        <h4>Listagem 3. Utilizando Glyphicons com mensagem de alerta</h4>
        <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Erro:</span>
            Mensagem inválida
        </div>

        <h4>Listagem 4. Criando um menu dropdown</h4>
        <div align="left">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Dropdown
	    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </div>
        </div>

        <h4>Obs. Criando um menu Dropup</h4>
        <div align="left">
            <div class="dropup">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuObs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Dropdown
	    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </div>
        </div>

        <h4>Listagem 5. Colocando uma linha divisória</h4>
        <div align="left">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownComDivisor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Dropdown
	    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownComDivisor">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Item Separado</a></li>
                </ul>
            </div>
        </div>

        <h4>Listagem 6. Colocando um cabeçalho na lista</h4>
        <div align="left">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownComCabelho" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Dropdown
	    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownComCabecalho">
                    <li class="dropdown-header">Cabeçalho 1</li>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </div>
        </div>


        <h4>Listagem 7. Desabilitando Item</h4>
        <div align="left">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownItemDesabilitado" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Dropdown
	    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownItemDesabilitado">
                    <li class="disabled"><a href="#">Item Desabilitado</a></li>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </div>
        </div>

        <h4>Listagem 8. Criando um grupo de botões</h4>
        <div class="btn-group" role="group" aria-label="Etiqueta1">
            <button type="button" class="btn btn-default">Botão1</button>
            <button type="button" class="btn btn-default">Botão2</button>
            <button type="button" class="btn btn-default">Botão3</button>
            <button type="button" class="btn btn-default">Botão4</button>
            <button type="button" class="btn btn-default">Botão5</button>
        </div>

        <h4>Listagem 9. Dimensinando grupos de botões</h4>
        <div class="btn-group btn-group-lg" role="group" aria-label="LG">
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
        </div>
        <div class="btn-group" role="group" aria-label="">
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
        </div>
        <div class="btn-group btn-group-sm" role="group" aria-label="SM">
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
        </div>
        <div class="btn-group btn-group-xs" role="group" aria-label="XL">
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
        </div>

        <h4>Listagem 10. Aninhando o dropdown em um grupo de botões</h4>
        <div class="btn-group" role="group" aria-label="Grupo Externo">
            <button type="button" class="btn btn-default">1</button>
            <button type="button" class="btn btn-default">2</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
	                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Dropdown 1</a></li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                </ul>
            </div>
        </div>

        <h4>Listagem 11. Alinhando grupo de botões na vertical</h4>
        <div class="btn-group btn-group-vertical" role="group" aria-label="Vertical">
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
            <button type="button" class="btn btn-default">A</button>
        </div>

        <h4>Listagem 12. Grupo de botões justificados com a tag &lt;a&gt;</h4>
        <div class="btn-group btn-group-justified" role="group" aria-label="Justificado">
            <a href="#" class="btn btn-default">Botão1</a>
            <a href="#" class="btn btn-default">Botão2</a>
            <a href="#" class="btn btn-default">Botão2</a>
        </div>

        <h4>Listagem 13. Grupo de botões justificados com tag &lt;button&gt;</h4>
        <div class="btn-group btn-group-justified" role="group" aria-label="Justificado">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default">Botão 1</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default">Botão 2</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default">Botão 3</button>
            </div>
        </div>

        <h4>Listagem 14. Criando uma barra de ferramentas</h4>
        <div class="btn-toolbar" role="toolbar" aria-label="Barra de Ferramentas">
            <div class="btn-group" role="group" aria-label="Grupo de botão 1">
                <button type="button" class="btn btn-default">A1</button>
                <button type="button" class="btn btn-default">A2</button>
                <button type="button" class="btn btn-default">A3</button>
                <button type="button" class="btn btn-default">A4</button>
            </div>
            <div class="btn-group" role="group" aria-label="Grupo de botão 2">
                <button type="button" class="btn btn-default">B1</button>
                <button type="button" class="btn btn-default">B2</button>
                <button type="button" class="btn btn-default">B3</button>
            </div>
        </div>

        <form id="form1" runat="server">
            <div>
                <h4>Listagem 15.Criando um grupo de inputs (Formulários)</h4>
                <div class="input-group">
                    <span class="input-group-addon" id="Forms Esquerdo">Nome</span>
                    <input type="text" class="form-control" placeholder="Nome" aria-describedby="Esquerdo">
                </div>
                <br />
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="E-mail" aria-describedby="Direito">
                    <span class="input-group-addon" id="Forms Direito">E-mail</span>
                </div>
                <br />
                <div class="input-group">
                    <span class="input-group-addon">R$</span>
                    <input type="text" class="form-control" aria-label="Ambos os lados">
                    <span class="input-group-addon">.00</span>
                </div>
            </div>


            <h4>Listagem 16. Tamanho dos forms</h4>
            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="LG">Grande</span>
                <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
            </div>
            <br />
            <div class="input-group">
                <span class="input-group-addon" id="">Padrão</span>
                <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
            </div>
            <br />
            <div class="input-group input-group-sm">
                <span class="input-group-addon" id="SM">Pequeno</span>
                <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon3">
            </div>

            <h4>Listagem 17. Inserindo botões no formulário</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Procurar</button>
                        </span>
                        <input type="text" class="form-control" placeholder="Pesquise aqui">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Pequise aqui">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Procurar</button>
                        </span>
                    </div>
                </div>
            </div>

            <h4>Listagem 18. Botão com dropdown no formulário</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown<span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Opção 1</a></li>
                                <li><a href="#">Opção 2</a></li>
                                <li><a href="#">Opção 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Opção separada</a></li>
                            </ul>
                        </div>
                        <input type="text" class="form-control" aria-label="...">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="...">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown<span class="caret"></span></button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="#">Opção 1</a></li>
                                <li><a href="#">Opção 2</a></li>
                                <li><a href="#">Opção 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Opção Separada</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Listagem 19. Colocando multiplos botões no formulário</h4>
            <div class="col-lg-6">
                <div class="input-group">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default" aria-label="Negrito">
                            <span class="glyphicon glyphicon-bold"></span>
                        </button>
                        <button type="button" class="btn btn-default" aria-label="Itálico">
                            <span class="glyphicon glyphicon-italic"></span>
                        </button>
                    </div>
                    <input type="text" class="form-control" aria-label="...">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Form2">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default" aria-label="Ajuda">
                            <span class="glyphicon glyphicon-question-sign"></span>
                        </button>
                        <button type="button" class="btn btn-default" aria-label="Itálico">Ação</button>
                    </div>
                </div>
            </div>

            <h4>Listagem 20. Checkbox e radio no formulário</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <span class="input-group-addon">
                            <input type="checkbox" aria-label="Checkbox">
                        </span>
                        <input type="text" class="form-control" aria-label="Chekbox">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="input-group">
                        <span class="input-group-addon">
                            <input type="radio" aria-label="Radio">
                        </span>
                        <input type="text" class="form-control" aria-label="Radio">
                    </div>
                </div>
            </div>

        </form>


        <h4>Listagem 21. Painel de abas</h4>
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Contato</a></li>
            <li role="presentation"><a href="#">Sobre</a></li>
        </ul>

        <h4>Listagem 22. Painel de pílulas</h4>
        <ul class="nav nav-pills">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Contato</a></li>
            <li role="presentation"><a href="#">Sobre</a></li>
        </ul>

        <h4>Listagem 23. Criando uma barra de navegação</h4>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Site</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Sobre</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Botão 1</a></li>
                                <li><a href="#">Botão 2</a></li>
                                <li><a href="#">Botão 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Link Separado</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Link Separado</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Procurar">
                        </div>
                        <button type="submit" class="btn btn-default">Procurar</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Contato</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Botão 1</a></li>
                                <li><a href="#">Botão 2</a></li>
                                <li><a href="#">Botão 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Botão Separado</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <h4>Listagem 24. Substituindo texto por imagem na barra de navegação</h4>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img alt="Brand" src="Content/img/Bootstrap-logo.png" /></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Sobre</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Botão 1</a></li>
                                <li><a href="#">Botão 2</a></li>
                                <li><a href="#">Botão 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Link Separado</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Link Separado</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Procurar">
                        </div>
                        <button type="submit" class="btn btn-default">Procurar</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Contato</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Botão 1</a></li>
                                <li><a href="#">Botão 2</a></li>
                                <li><a href="#">Botão 3</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Botão Separado</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <h4>Listagem 25. Criando paginação</h4>
        <nav>
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Anterior">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                    <a href="#" aria-label="Próximo">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>


        <h4>Listagem 26. Paginação com a página atual selecionada</h4>
        <nav>
            <ul class="pagination">
                <li class="disabled"><a href="#" aria-label="Anterior"><span aria-hidden="true">&laquo;</span></a></li>
                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li class="disabled"><a href="#" aria-label="Próximo"><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>

        <h4>Listagem 27. Criando um rastro de navegação na página</h4>
        <ol class="breadcrumb">
            <li><a href="#">Pagina pai</a></li>
            <li><a href="#">Filho 1</a></li>
            <li class="active">Filho 2</li>
        </ol>

        <h4>Listagem 28. Tipos de alertas</h4>
        <div class="alert alert-success" role="alert">Este é um alerta para feedback de <strong>Sucesso!</strong></div>
        <div class="alert alert-info" role="alert">Este é um alerta apenas para feedback <strong>Informativo!</strong></div>
        <div class="alert alert-warning" role="alert">Este é um alerta para feedback de <strong>Atenção!</strong></div>
        <div class="alert alert-danger" role="alert">Este é um alerta para feedback de <strong>Perigo!</strong></div>

        <h4>Listagem 29. Alerta com opção de fechar</h4>
        <div class="alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Parabéns!   </strong>Após ler essa mensagem você pode fechá-la.
        </div>

        <h4>Listagem 30. Link em um alerta</h4>
        <div class="alert alert-danger" role="alert">
            <strong>Erro: </strong>algo deu errado , <a href="home_2.aspx" class="alert-link">clique aqui</a> para mais informações!
        </div>

        <h4>Listagem 31. Criando um Thumbnail</h4>
        <div class="row">
            <div class="col-xs-6 col-md-3">
                <a href="#" class="thumbnail">
                    <img data-src="holder.js/100%x180" alt="100%x180" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU1M2RhZTY5ODggdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTUzZGFlNjk4OCI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI2MSIgeT0iOTQuNSI+MTcxeDE4MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
                </a>
            </div>
        </div>
    </div>
</body>
</html>
