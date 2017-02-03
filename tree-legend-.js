Ext.require([
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'GeoExt.tree.Panel',
    'Ext.tree.plugin.TreeViewDragDrop',
    'GeoExt.panel.Map',
    'GeoExt.tree.OverlayLayerContainer',
    'GeoExt.tree.BaseLayerContainer',
    'GeoExt.data.LayerTreeModel',
    'GeoExt.tree.View',
    'GeoExt.container.WmsLegend',
    'GeoExt.tree.Column',
    // We need to require this class, even though it is used by Ext.EventObjectImpl
    // see: http://www.sencha.com/forum/showthread.php?262124-Missed-(-)-dependency-reference-to-a-Ext.util.Point-in-Ext.EventObjectImpl
    'Ext.util.Point'
]);
//
//var _geoserver_url = "http://undp.vietkidz.com:8080/geoserver/tlu/wms";
var _geoserver_url = "http://localhost:8080/geoserver/thuyloi/wms";
//alert(document.domain);
if (document.domain){
	_geoserver_url = "http://" + document.domain + ":8080/geoserver/tlu/wms";
}
//alert(_geoserver_url);
/* mapping layers */
var mapLayers = [];
mapLayers.push({name:'Commune population polygon',l:'Commune_population_polygon',htmacdinh:1,htdongian:0,htchitiet:0,httuychon:0,singleTile:true,style:'',isBaseLayer:false});
mapLayers.push({name:'Forest polygon',l:'Forest_polygon',htmacdinh:1,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false});
mapLayers.push({name:'Landslide risk polygon rd now',l:'Landslide_risk_polygon',htmacdinh:1,htdongian:1,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir45_2025',isBaseLayer:false});
mapLayers.push({name:'Landslide risk polygon ir45_2025',l:'Landslide_risk_polygon',htmacdinh:1,htdongian:0,htchitiet:1,httuychon:0,singleTile:true,style:'landslide_risk_polygon_ir85_2025',isBaseLayer:false});
/* end mapping */
function _map_layer(datas, f){
	//console.log("_map_layer,f=" + f);
	var ret = [];
	var obj,data;
	for(var i=0;i<datas.length;i++){
		data = datas[i];
		if (!f || (data[f] === 1)){
			//console.log(data);
			obj = _map_layer_obj(data);
			if (obj){
				ret.push(obj);
			}
		}
	}
	//console.log(ret);
	return ret;
}
function _map_layer_obj(data){
	return new OpenLayers.Layer.WMS(data.name,
                    _geoserver_url,
                    {
                        layers: data.l,
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: data.isBaseLayer,
                        singleTile: data.singleTile,
						data:data
                    }
                );
}
function _map_super_panel(datas){
	return Ext.create('GeoExt.MapPanel', {
			region: "center",
			center: [104.900, 21.9000],
			zoom: 7.5,
			layers: _map_layer(datas),
		});
}
Ext.application({
    name: 'Tree Legend',
    launch: function() {
		//102.2000, 6.0000, 108.0000, 23.3900
		//Projected Bounds: 190004.0544, 663996.8088, 832157.7917, 2589882.7561
		//var point = new OpenLayers.LonLat(474775.639946, 1632416.492751); 
		//point.transform(new OpenLayers.Projection("EPSG:3405"));
		var mapPanel = _map_super_panel(mapLayers);
		
		
		var store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
				expanded: true,
				children: [
                    {
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {store: mapPanel.layers,filter:function(record) {
								var layer = record.getLayer();
									return layer.data.htmacdinh === 1;
								}
							}
                        }],
                        expanded: false,
						text: "Mặc định"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {store: mapPanel.layers,filter:function(record) {
								var layer = record.getLayer();
									return layer.data.htdongian === 1;
								}
							}
                        }],
                        expanded: false,
						text: "Đơn giản"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {store: mapPanel.layers,filter:function(record) {
								var layer = record.getLayer();
									return layer.data.htchitiet === 1;
								}
							}
                        }],
                        expanded: false,
						text: "Chi tiết"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {store: mapPanel.layers,filter:function(record) {
								var layer = record.getLayer();
									return layer.data.httuychon === 1;
								}
							}
                        }],
                        expanded: false,
						text: "Tùy chọn"
                    }
                ]
            }
        });
		
        var tree = Ext.create('GeoExt.tree.Panel', {
			border: true,
            region: "west",
            title: "Lớp thông tin",
            layout: "fit",
			split: true,
			collapsible: true,
            collapseMode: "mini",
            autoScroll: true,
            store: store,
            rootVisible: false,
            lines: false,
			renderTo: 'v-left-tree'
        });
		var logo = Ext.create('Ext.Panel', {
			border: true,
            //region: "west",
            contentEl: 'desc',
			renderTo: 'v-left-info'
        });
		var left = Ext.create('Ext.Panel', {
			border: true,
            region: "west",
            width: 250,
			contentEl: 'v-left'
        });
        Ext.create('Ext.Viewport', {
            layout: "fit",
            hideBorders: true,
            items: {
                layout: "border",
				deferredRender: false,
                items: [
					left, 
					mapPanel
					
                ]
            }
        });
    }
});