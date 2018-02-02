In this application I used the following:
-	Angular 5 ( html javascript typescript css )
-	Spotify Api

For the css I used all the features it provides us , I have customized the display elements ( css glid , float , flex-box ) , Also used the media query  to control the display screens 
For angular 5 the features it provides us component , modeles , directives , loop , services , http , observables(rxjs ) . 
For the search, the data was sent after two seconds of the user lifting his hand from the search box ,i used create new observable an emmit data after 2 s by opperator debounceTime and . 

To get the tokens , 
All requests to the Spotify Web API require authorization; that is, the user must have granted permission for an application to access the requested data. To prove that the user has granted permission, the request header sent by the application must include a valid access token.
I created variable  in localstorage  in order to check  if existing valid access token. I mean if that variable exists, I do a search directly from Spotify Api and if it does not exist i send try to get valid access token 
I followed this page : https://developer.spotify.com/web-api/authorization-guide/
To get Authorization Code Flow you can find steps in method getToken() in services/spotify.services.ts
To get access_token we need to send post to https://accounts.spotify.com/api/token
I face problem with CORS : " 
 the client credentials flow is not intended for calls directly from browsers as it exposes the client secret in plaintext. The same is true for the authorization code flow; both the client credentials and authorization code flows require the client secret, and as that must remain secret, the CORS restrictions prevent them from being called directly from browsers. If you need to auth from a browser without a backend, you should use the implicit grant flow. Otherwise, I'd recommend implementing client credentials on a backend and proxying the requests to your browser, using your preferred method of client-server authentication to prevent unauthorized use of your server.
"
That's why  created a backend (PHP or node.js )   you can see code in server files and i hosted in my own host name : mecheria.net 
After the user get token he can search music .

<img src="https://image.ibb.co/byLKUR/2018_02_02_10_00_15.jpg">
