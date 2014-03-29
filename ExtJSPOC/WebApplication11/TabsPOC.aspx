<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TabsPOC.aspx.cs" Inherits="WebApplication11.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
    <script type="text/javascript" src="ext/ext-all.js"></script>

    <!-- Shared example includes -->
    <link rel="stylesheet" type="text/css" href="ext/examples/shared/example.css" />

    <!-- Example includes -->
    <link rel="stylesheet" type="text/css" href="tabs.css" />

    <!-- GC -->

    <script type="text/javascript" src="Scripts/Tab.js"></script>
</head>
<body>
        <div id="tabs">
        <div id="WebForms" class="x-hide-display">
            <p>
            Wat is ASP.NET Web Forms?
            <br></br>
            ASP.NET Web Forms is een onderdeel van het ASP.NET Web applicatie framework. Het is een van de 3 programmeer modellen die je kunt gebruiken voor het creëren van een ASP.NET Web Applicatie.
            Web Forms zijn pagina’s die door de gebruikers in de browser kan worden verzocht. Deze vormen de user interface van je web applicatie. Deze pagina’s zijn geschreven in html in combinatie met server controls en server code. Als een gebruiker naar de pagina verzoekt wordt de code gecompileerd en uitgevoerd op de server. Dat genereert weer html dat de browser kan weergeven.
            </p>
        </div>
        <div id="MVC" class="x-hide-display">
            <p>
            ASP.NET MVC is net als Web Forms een onderdeel van het ASP.NET framework. En kan net als Web Forms gebruikt worden bij het creëren van een ASP.NET web applicatie.
            MVC gaat uit van de MVC architectuur. Dit betekent dat de applicatie in 3 onderdelen is ingedeeld: Model, View en Controller. 
            Het Model bevat de logica achter de applicatie dit kunnen bijvoorbeeld objecten en ook verbindingen met databases zijn. 
            De Views bevatten de componenten die de user interface aan de gebruiker laat zien. Dit is meestal gecreëerd van de data van het model. Bijvoorbeeld een tabel met producten (hierbij kunnen de producten uit een externe database zijn ingeladen).
            Controllers zijn de componenten die interactie van de gebruiker afhandelen, samenwerken met het model en kiezen welke view er getoond moet worden. Binnen MVC toont alleen de view informatie en behandeld de controller de input en interactie. Het fungeert als laag tussen de views en het model.
            </p>
        </div>
            <div id="ExtJS" class="x-hide-display">
            <p>ExtJS is een Javascript Framework dat gebruikt kan worden bij het ontwerpen van web applicaties. Het bevat 100 voorbeelden, 1000 API’s, honderden componenten en een volledige documentatie omgeving. </p>
        </div>
            <div id="Ext.NET" class="x-hide-display">
            <p>Ext.NET is een componenten framework voor ASP.NET (voor zowel Webforms als MVC) die de Sencha ExtJS library integreert.</p>
        </div>
    </div>
</body>
</html>
