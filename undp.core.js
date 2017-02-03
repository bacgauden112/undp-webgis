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
	'GeoExt.window.Popup',
    'Ext.util.Point',
	'Ext.toolbar.Toolbar',
	'GeoExt.Action'
]);
var _geoserver_url = '';
var mapLayers = [];
var mapBlocks = {};
var blockDefault = [];
/* end mapping */
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function _map_layer(datas, f){
	//console.log("_map_layer,f=" + f);
	var ret = [];
	var obj,data;
	for(var i=datas.length-1;i>=0;i--){
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
	if (!_geoserver_url) _geoserver_url = _geoserver_url_wms();
    var name = _map_lang == 'en' ? data.ename : data.name;
	var style = _map_lang == 'en' ? data.estyle: data.style;
	return new OpenLayers.Layer.WMS(name,
		_geoserver_url,
		{
			layers: data.l,
			format: 'image/png',
			transparent: true,
			styles: style
		},
		{
			visibility: data.visibility,
			isBaseLayer: data.isBaseLayer,
			singleTile: data.singleTile,
			data:data
		}
	);
}
var _map_lang = getParameterByName('lang');
__set_lang(_map_lang);

// combobox
// models
Ext.define("Province", {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'province', mapping: 'properties.PRONAME'},
        {name: 'bbox', mapping: 'properties.bbox'},
		{name: 'geometry', mapping: 'geometry'}
    ]
});
Ext.define("District", {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'district', mapping: 'properties.District'},
        {name: 'bbox', mapping: 'properties.bbox'}
    ]
});
Ext.define("Commune", {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'commune', mapping: 'properties.COMMUNE'},
        {name: 'bbox', mapping: 'properties.bbox'}
    ]
});
// end models

// stores
var provinceStore = Ext.create('Ext.data.Store', {
    model: 'Province',
    proxy: {
        type: 'ajax',
        url: _geoserver_url_ajax('Province_region'),
        reader: {
            type: 'array',
            rootProperty: 'features'
        }
    },
    autoLoad: true
});
var districtStore = Ext.create('Ext.data.Store', {
    model: 'District',
    proxy: {
        type: 'ajax',
        url: _geoserver_url_ajax('District_People_committee_Point_point'),
        reader: {
            type: 'array',
            rootProperty: 'features'
        }
    },
    autoLoad: true
});
var communeStore = Ext.create('Ext.data.Store', {
    model: 'Commune',
    proxy: {
        type: 'ajax',
        url: _geoserver_url_ajax('Communal_People_Committee_Points_point_point'),
        reader: {
            type: 'array',
            rootProperty: 'features'
        }
    },
    autoLoad: true
});
// end stores
var search_province_title = __t('Tìm kiếm tỉnh');
var search_district_title = __t('Tìm kiếm huyện');
var search_commune_title = __t('Tìm kiếm xã');
// search province
var province_combobox = Ext.create('Ext.form.field.ComboBox', {
    fieldLabel: search_province_title,
    displayField: 'province',
    valueField: 'bbox',
    width: 260,
    labelWidth: 120,           
    store: provinceStore,
    queryMode: 'local',
    listeners: {
        select: function () {
            var value = this.getValue();
            //var extent = new OpenLayers.Bounds(value);
			var extent = new OpenLayers.Bounds(value[0],value[3],value[1],value[2]);
            mapPanel.map.zoomToExtent(extent);
        }
    }
});
// end search province

// search district
var district_combobox = Ext.create('Ext.form.field.ComboBox', {
    fieldLabel: search_district_title,
    displayField: 'district',
    valueField: 'bbox',
    width: 260,
    labelWidth: 120,           
    store: districtStore,
    queryMode: 'local',
    listeners: {
        select: function () {
            var value = this.getValue();
            var extent = new OpenLayers.Bounds(value);
            mapPanel.map.zoomToExtent(extent);
        }
    }
});
// end search district

// search commune
var commune_combobox = Ext.create('Ext.form.field.ComboBox', {
    fieldLabel: search_commune_title,
    displayField: 'commune',
    valueField: 'bbox',
    width: 260,
    labelWidth: 120,           
    store: communeStore,
    queryMode: 'local',
    listeners: {
        select: function () {
            var value = this.getValue();
            var extent = new OpenLayers.Bounds(value);
            mapPanel.map.zoomToExtent(extent);
        }
    }
});
// end search commune
// end define combobox

function _project_html(){
    var ret = '<img src="logoDHTL.jpg" height="40px" style="float:left;"/>';
    ret +='<label style="float:left;margin-left:3px;">' + 
	__t('Công ty TNHH Tư vấn <br/>Trường Đại học Thủy lợi') 
	+ '</label>';
    return '<div>' + ret + '</div>';
}
function _project_html_2(){
    var ret = '<img src="undp-logo.jpg" height="40px" style="float:left;"/>';
    ret +='<label style="float:left;margin-left:10px;">' +
	__t('Dự án: Tăng cường Khả năng Chống chịu Khí hậu cho Cơ sở hạ tầng các tỉnh miền núi phía Bắc<br/>Gói thầu: TĂNG CƯỜNG CƠ SỞ DỮ LIỆU KHÔNG GIAN VÀ ATLAS CHO CƠ SỞ HẠ TẦNG NÔNG THÔN CÁC TỈNH MIỀN NÚI PHÍA BẮC VIỆT NAM') 
	+ '</label>';
    return '<div>' + ret + '</div>';
}

function _map_super_panel_by_attr(datas,f){
    var projectHtml = _project_html_2();
	var controls = [];
	controls.push(
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.PanPanel(),
            new OpenLayers.Control.ZoomPanel()
        );
	return Ext.create('GeoExt.MapPanel', {
		title: projectHtml,
        region: "center",
		map: {
			controls: controls
		},
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'top',
			items: [province_combobox, district_combobox, commune_combobox]
        }],
		center: [104.900, 21.9000],
		zoom: 7.5,
		layers: _map_layer(datas,f),
	});
}
function _layer_show(display,layer){
	
	var block = mapBlocks[display];
	if (!block) return false;
	//console.log (display);
	//console.log (layer.l);
	var check = block.layers.indexOf(layer.l);
	if (check > -1) {
		//console.log ("block=[" + display + "]->[" + layer.l + "]=1");
		return true;
	}
	check = blockDefault.indexOf(layer.l);
	if (check > -1) {
		return true;
	}
	
	return false;
}
function _layer_options(){
	var ret = [
					{ value: 'htmacdinh', name: __t('Mặc định') },
					{ value: 'htdongian', name: __t('Đơn giản') },
					{ value: 'htchitiet', name: __t('Chi tiết') },
					{ value: 'httuychon', name: __t('Tùy chọn') }
				];
	var t = '';
	var block;
	for (var prop in mapBlocks) {
		if (mapBlocks.hasOwnProperty(prop) && mapBlocks[prop]) {
			block = mapBlocks[prop];
			t = _map_lang == 'en' ? block.en : block.vi;
			ret.push({value:prop, name: __t(t)});
		}
	}
	
	return ret;
}
var mapViewOptions ;
var layerTitle = __t("Lớp thông tin");
var mapOptionLabel =  __t('Hiển thị');



function _create_store(){
	return Ext.create('Ext.data.TreeStore', {
		model: 'GeoExt.data.LayerTreeModel',
		root: {
			expanded: true,
			children: [
				{
					plugins: [{
						ptype: 'gx_layercontainer',
						loader: {
							store: mapPanel.layers,
							createNode: function(attr) {
								attr.component = {
									xtype: "gx_wmslegend",
									layerRecord: mapPanel.layers.getByLayer(attr.layer),
									showTitle: false,
									cls: "legend"
								};
								return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
							}
						}
					}],
					expanded: false,
					text: layerTitle
				}
			]
		}
	});
}

var filterAttr = 'htmacdinh';
var mapPanel;
var store;
var projectHtml = _project_html();
var en_url = '/webgis/?lang=en';
var vi_url = '/webgis/';
var app = Ext.application({
    name: __t('Tree Legend'),
    launch: function() {
		mapPanel = _map_super_panel_by_attr(mapLayers,filterAttr);
		store = _create_store();
        var langtoolbar = {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    icon: 'Vietnam_Flag.png',
                    disabled: _map_lang == 'en' ? false : true,
					handler: function() {
                        window.location.replace(vi_url);
                    }
                },
                {
                    xtype: 'button',
                    icon: 'United_Kingdom_Flag.png',
					disabled: _map_lang == 'en' ? true : false,
                    handler: function() {
                        window.location.replace(en_url);
                    }
                }
				,
                {
                    text   : __t('Giới thiệu dự án'),
					handler: function() {
                        window.location.replace("/gis");
                    }
                }
            ]
        };
       
        var tree = Ext.create('GeoExt.tree.Panel', {
			border: true,
            region: "west",
			title: projectHtml,
            width: 250,
			split: true,
			collapsible: true,
            collapseMode: "mini",
            autoScroll: true,
            store: store,
            rootVisible: false,
            lines: false,
			tbar: [{
				xtype: 'combo',
				width: 220,
				labelWidth: 60,
				fieldLabel: mapOptionLabel,
				displayField: 'name',
				valueField: 'value',
				//labelStyle: 'cursor:move;',
				//margin: '0 5 0 0',
				store: Ext.create('Ext.data.Store', {
					fields: ['value', 'name'],
					data : _layer_options()
				}),
				value: 'htmacdinh',
				listeners: {
					select: function(combo) {
						var v = combo.getValue();
						filterAttr = v;//'httuychon';
						var layer,obj;
						
						var len = mapPanel.map.layers.length;
						for(var i = len-1; i>=0;i--){
							mapPanel.map.removeLayer(mapPanel.map.layers[i]);
						}
						var show = 0;
						for(var i = mapLayers.length-1; i>=0;i--){
							obj = mapLayers[i];
							show = 0;
							if (obj[filterAttr] === 1){
								show = 1;
							}else if (_layer_show(filterAttr,obj)){
								show = 1;
							}
							if (show){
								layer = _map_layer_obj(obj);
								mapPanel.map.addLayer(layer);
							}
						}
						store = _create_store();
						//tree.store = store;
					}
				}
			}],
            dockedItems: [langtoolbar]
        });

		// test start
		
		// test end
        Ext.create('Ext.Viewport', {
            layout: "fit",
            hideBorders: true,
            items: {
                layout: "border",
				deferredRender: false,
                items: [
                    mapPanel, tree
                ]
            }
        });
    }
});