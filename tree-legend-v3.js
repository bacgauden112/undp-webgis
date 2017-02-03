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
//var _geoserver_url = "http://103.18.4.46:8080/geoserver/tlu/wms";
//var _geoserver_url = "http://localhost:8080/geoserver/thuyloi/wms";
var _geoserver_url = "http://103.18.4.46:8080/geoserver/tlu/wms";
//alert(document.domain);
if (document.domain){
	//_geoserver_url = "http://" + document.domain + ":8080/geoserver/tlu/wms";
}
//alert(_geoserver_url);
/* mapping layers */

var mapLayers = [];

mapLayers.push({name:'Tên các trạm bơm',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các tuyến đê',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên cống thủy lợi',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm khí tượng',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các hồ chứa có dung tích lớn',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm thủy văn',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trụ sở văn phòng phòng chống lụt bão',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*Tên tỉnh',l:'Provincial_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*Tên các huyện',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*Tên các xã',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình kè được đánh giá tổn thương',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*Tên của các công trình thủy lợi được đánh giá tổn thương',l:'Vulnerability_irrigation_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình đường giao thông được đánh giá tổn thương',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy điện',l:'Electricity_power_plan_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy',l:'Factory_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nghĩa trang',l:'Cementary_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Chùa',l:'Pagoda_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bưu điện',l:'Post_office_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tượng đài',l:'Monument_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm bơm',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Đê',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Cống',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thủy văn',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Hồ chứa dung tích lớn',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm khí tượng',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Biến thế',l:'Electric_transformer_station_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trường học',l:'School_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bệnh viện',l:'Hospital_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trụ sở văn phòng phòng chống lụt bão',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nơi trú ẩn',l:'Safety_place_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*UBND tỉnh',l:'Province_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*UBND huyện',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*UBND xã',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thông tin',l:'Telecommunation_station_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình kè',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'*Mức độ tổn thương của các công trình thủy lợi',l:'Vulnerability_irrigation_points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình giao thông',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Khu dân cư',l:'Residential_area_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ranh giới tỉnh',l:'Province_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Ranh giới huyện',l:'District_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Ranh giới xã',l:'Commune_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Sông suối (dạng đường)',l:'River_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Sông suối (dạng vùng)',l:'River_polygon',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Đường giao thông',l:'Transportation_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Đường đồng mức độ cao',l:'Main_contour_polyline',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Khu tập trung dân cư',l:'High_residential_area_density_polygon',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Khu vực nghiên cứu',l:'Study_area_region',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:true});

mapLayers.push({name:'Lưu vực sông suối chính',l:'River_basin_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mật độ dân số',l:'Commune_population_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Phân bố rừng',l:'Forest_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});


mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi dự báo cho giai đoạn hiện tại (2015)',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_ir85_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông dự báo cho giai đoạn hiện tại (2015)',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_rd_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_rd45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_rd45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_rd85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_rd85_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè dự báo cho giai đoạn hiện tại (2015)',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_em_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_em45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_em45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_em85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'landslide_risk_polygon_em85_2050',isBaseLayer:false,visibility:false});



/* end mapping */
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
	return new OpenLayers.Layer.WMS(data.name,
                    _geoserver_url,
                    {
                        layers: data.l,
                        format: 'image/png',
                        transparent: true,
						styles: data.style
                    },
                    {
						visibility: data.visibility,
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
var _global_option = 0;
var defautMapLayers= [];
for(var i=0;i<2;i++){
	defautMapLayers.push(mapLayers[i]);
}

var mapViewOptions = [
				{ value: 'default', name: 'Mặc định' },
				{ value: 'simple', name: 'Đơn giản' },
				{ value: 'detail', name: 'Chi tiết' },
				{ value: 'options', name: 'Tùy chọn' }
			];
function _create_options_box(){
	return 
	Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'Chế độ hiển thị',
	displayField: 'name',
	width: 250,
	labelWidth: 100,
	store: Ext.create('Ext.data.Store', {
                        fields: ['value', 'name'],
                        data : mapViewOptions
                    }),
	queryMode: 'local',
	emptyText:'Layer Selection',
	typeAhead: true,
	listeners : {
	'select' : function(){
		var selValW = this.getValue();
			_options_box_select(selValW);
		}}
	}); 
}

function _options_box_select(mPanel,v){
	//alert(v);
	//mPanel.map.layers = _map_layer(defautMapLayers);
	//store.getRootNode().removeAll();
	
	filterAttr = 'httuychon';
	store= _create_store();
}
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
								filter:function(record) {
									var layer = record.getLayer();
									//return layer.data.httuychon === 1;
									return layer.data[filterAttr] === 1;
								},
								createNode: function(attr) {
									// add a WMS legend to each node created
									attr.component = {
										xtype: "gx_wmslegend",
										layerRecord: mapPanel.layers.getByLayer(attr.layer),
										showTitle: false,
										// custom class for css positioning
										// see tree-legend.html
										cls: "legend"
									};
									return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
								}
							}
                        }],
                        expanded: false,
						text: "Tùy chọn"
                    }
                ]
            }
        });
}
var filterAttr = 'htmacdinh';//'httuychon';
var mapPanel;
var store;
var optionBar;
Ext.application({
    name: 'Tree Legend',
    launch: function() {
		//102.2000, 6.0000, 108.0000, 23.3900
		//Projected Bounds: 190004.0544, 663996.8088, 832157.7917, 2589882.7561
		//var point = new OpenLayers.LonLat(474775.639946, 1632416.492751); 
		//point.transform(new OpenLayers.Projection("EPSG:3405"));
		mapPanel = _map_super_panel(mapLayers);
		optionBar = _create_options_box();
		store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
				expanded: true,
				children: [
                    /*{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {
								store: mapPanel.layers,
								filter:function(record) {
									var layer = record.getLayer();
									return layer.data.htmacdinh === 1;
								},
								createNode: function(attr) {
									// add a WMS legend to each node created
									attr.component = {
										xtype: "gx_wmslegend",
										layerRecord: mapPanel.layers.getByLayer(attr.layer),
										showTitle: true,
										// custom class for css positioning
										// see tree-legend.html
										cls: "legend"
									};
									return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
								}
							}
                        }],
                        expanded: false,
						text: "Mặc định"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {
								store: mapPanel.layers,
								filter:function(record) {
										var layer = record.getLayer();
										return layer.data.htdongian === 1;
								},
								createNode: function(attr) {
									// add a WMS legend to each node created
									attr.component = {
										xtype: "gx_wmslegend",
										layerRecord: mapPanel.layers.getByLayer(attr.layer),
										showTitle: false,
										// custom class for css positioning
										// see tree-legend.html
										cls: "legend"
									};
									return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
								}
							}
                        }],
                        expanded: false,
						text: "Đơn giản"
                    },{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {
								store: mapPanel.layers,
								filter:function(record) {
									var layer = record.getLayer();
									return layer.data.htchitiet === 1;
								},
								createNode: function(attr) {
									// add a WMS legend to each node created
									attr.component = {
										xtype: "gx_wmslegend",
										layerRecord: mapPanel.layers.getByLayer(attr.layer),
										showTitle: false,
										// custom class for css positioning
										// see tree-legend.html
										cls: "legend"
									};
									return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
								}
							}
                        }],
                        expanded: false,
						text: "Chi tiết"
                    },*/{
                        plugins: [{
                            ptype: 'gx_layercontainer',
                            loader: {
								store: mapPanel.layers,
								filter:function(record) {
									var layer = record.getLayer();
									//return layer.data.httuychon === 1;
									return layer.data[filterAttr] === 1;
								},
								createNode: function(attr) {
									// add a WMS legend to each node created
									attr.component = {
										xtype: "gx_wmslegend",
										layerRecord: mapPanel.layers.getByLayer(attr.layer),
										showTitle: false,
										// custom class for css positioning
										// see tree-legend.html
										cls: "legend"
									};
									return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
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
				labelWidth: 100,
				fieldLabel: 'Chế độ hiển thị',
				displayField: 'name',
				valueField: 'value',
				//labelStyle: 'cursor:move;',
				//margin: '0 5 0 0',
				store: Ext.create('Ext.data.Store', {
					fields: ['value', 'name'],
					data : mapViewOptions
				}),
				value: 'default',
				listeners: {
					select: function(combo) {
						var v = combo.getValue();
						_options_box_select(mapPanel,v);
					}
				}
			}]
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
		//mapPanel = _map_super_panel(defautMapLayers);
		//mapPanel = _map_super_panel(mapLayers);
    }
});