# Coding Structure

<img width="2680" height="834" alt="Blank diagram" src="https://github.com/user-attachments/assets/88964153-7732-435f-92df-d9c891cab9f8" />


## Components <> Store <> Api
Since we moved to Pinia in v.0.11.0 we want to focus on the dataflow always moving through the store.
When components need some data, they should always request the data from the store. The store on the otherhand can then decide how to act
on those requests. He can serve the cached files directly or fetch new data from the server, using the `api.js` script.
This workflow should be used, unless we need 'stateless' requests from the components, e.g. we have a multiselect field, that wants to 
show a list of results.
