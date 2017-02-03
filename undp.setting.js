/* define geoserver and layer */
var global_geoserver = 'http://undp.vietkidz.com:8080/geoserver/';
function _geoserver_url_wms(){
	return global_geoserver + "tlu/wms";//"http://103.18.4.46:8080/geoserver/tlu/wms";
}
function _geoserver_url_ajax(l){
	return global_geoserver + "wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=" + l + "&exceptions=text/javascript&outputFormat=application/json"
}