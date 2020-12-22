<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="home_2.aspx.cs" Inherits="Bootstrap.home_2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <!--CSS Bootstrap-->
    <link href="Content/CSS/Bootstrap.css" rel="stylesheet" />
    <link href="Content/CSS/Geral.css" rel="stylesheet" />
        <!--Jquery-->
    <script src="scripts/JS/jquery-1.12.4.min.js"></script>
    <!--JavaScript Bootstrap-->
    <script src="scripts/JS/Bootstrap.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container" align="center">
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

        <ul class="nav nav-pills">
            <li role="presentation" class="active"><a href="Home.aspx">Home</a></li>
            <li role="presentation"><a href="#">Contato</a></li>
            <li role="presentation"><a href="#">Sobre</a></li>
        </ul>

        </div>
    </form>
</body>
</html>
