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
var mapLayers = [];
mapLayers.push({name:'Commune population polygon',l:'Commune_population_polygon',htmacdinh:1,htdongian:0,htchitiet:0,singleTile:true,style:'',isBaseLayer:false});
Ext.application({
    name: 'Tree Legend',
    launch: function() {
		//102.2000, 6.0000, 108.0000, 23.3900
		//Projected Bounds: 190004.0544, 663996.8088, 832157.7917, 2589882.7561
		//var point = new OpenLayers.LonLat(474775.639946, 1632416.492751); 
		//point.transform(new OpenLayers.Projection("EPSG:3405"));
        var mapPanel = Ext.create('GeoExt.MapPanel', {
            region: "center",
			//map: {allOverlays: false},
            center: [104.900, 21.9000],
            zoom: 7.5,
            layers: [
                /*new OpenLayers.Layer.WMS("OpenStreetMap WMS",
                    "https://ows.terrestris.de/osm/service?",
                    {layers: 'OSM-WMS'},
                    {
                        attribution: '&copy; terrestris GmbH & Co. KG <br>' +
                            'Data &copy; OpenStreetMap ' +
                            '<a href="http://www.openstreetmap.org/copyright/en"' +
                            'target="_blank">contributors<a>',
                        buffer: 0,
                        // exclude this layer from layer container nodes
                        displayInLayerSwitcher: true
                    }
                ),*/
				// Polygons
				new OpenLayers.Layer.WMS("Commune population polygon",
                    _geoserver_url,
                    {
                        layers: 'Commune_population_polygon',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Forest polygon",
                    _geoserver_url,
                    {
                        layers: 'Forest_polygon',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				/*
				 *
				 landslide_risk_polygon_ir45_2025
				landslide_risk_polygon_ir85_2025
				landslide_risk_polygon_rd45_2050
				landslide_risk_polygon_rd85_2050
				landslide_risk_polygon_rd_now 
				 */
				new OpenLayers.Layer.WMS("Landslide risk polygon rd now",
                    _geoserver_url,
                    {
                        layers: 'Landslide_risk_polygon',
                        format: 'image/png',
						transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Landslide risk polygon ir45_2025",
                    _geoserver_url,
                    {
                        layers: 'Landslide_risk_polygon',
                        format: 'image/png',
						styles: 'landslide_risk_polygon_ir45_2025',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Landslide risk polygon ir45_2025",
                    _geoserver_url,
                    {
                        layers: 'Landslide_risk_polygon',
                        format: 'image/png',
						styles: 'landslide_risk_polygon_ir85_2025',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Landslide risk polygon rd45_2050",
                    _geoserver_url,
                    {
                        layers: 'Landslide_risk_polygon',
                        format: 'image/png',
						styles: 'landslide_risk_polygon_rd45_2050',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Landslide risk polygon rd85_2050",
                    _geoserver_url,
                    {
                        layers: 'Landslide_risk_polygon',
                        format: 'image/png',
						styles: 'landslide_risk_polygon_rd85_2050',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Residential area polygon",
                    _geoserver_url,
                    {
                        layers: 'Residential_area_polygon',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("River basin polygon",
                    _geoserver_url,
                    {
                        layers: 'River_basin_polygon',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				// Points
				new OpenLayers.Layer.WMS("Electric transformer station point",
                    _geoserver_url,
                    {
                        layers: 'Electric_transformer_station_point',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Hospital",
                    _geoserver_url,
                    {
                        layers: 'Hospital_point',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
                new OpenLayers.Layer.WMS("School",
                    _geoserver_url,
                    {
                        layers: 'School_point',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("Factory",
                    _geoserver_url,
                    {
                        layers: 'Factory_point',
                        format: 'image/png',
                        transparent: true
                    },
                    {
						isBaseLayer: false,
                        singleTile: true
                    }
                )
				
            ]
        });

        var store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
				expanded: true,
				children: [
                    {
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            store: mapPanel.layers
                        }],
                        expanded: true,
						text: "Mặc định"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            store: mapPanel.layers
                        }],
                        expanded: true,
						text: "Đơn giản"
                    }
					/*, {
                        plugins: ['gx_baselayercontainer'],
                        expanded: true,
                        text: "Ảnh vệ tinh"
                    }, {
                        plugins: ['gx_overlaylayercontainer'],
                        expanded: false
                    }*/
                ]
            }
        });

        var tree = Ext.create('GeoExt.tree.Panel', {
			border: true,
            region: "west",
            title: "Lớp thông tin",
            width: 250,
			split: true,
			collapsible: true,
            collapseMode: "mini",
            autoScroll: true,
            store: store,
            rootVisible: false,
            lines: false
        });

        Ext.create('Ext.Viewport', {
            layout: "fit",
            hideBorders: true,
            items: {
                layout: "border",
				deferredRender: false,
                items: [
                    mapPanel, tree/*, {
                        //contentEl: desc,
                        region: "east",
                        width: 250,
                        bodyStyle: {padding: "5px"}
                    }*/
                ]
            }
        });
    }
});