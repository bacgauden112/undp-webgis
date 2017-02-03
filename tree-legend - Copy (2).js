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

var _geoserver_url = "http://103.18.4.46:8080/geoserver/tlu/wms";
//alert(document.domain);
if (document.domain){
	_geoserver_url = "http://" + document.domain + ":8080/geoserver/tlu/wms";
}
//_geoserver_url = "http://localhost:8080/geoserver/thuyloi/wms";
//alert(_geoserver_url);
/* mapping layers */

var mapLayers = [];

mapLayers.push({name:'Tên các trạm bơm',ename:'Label names for pumping stations',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'Pumping_station_points_label',style:'Pumping_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các tuyến đê',ename:'Label names for dikes',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'dike_polyline_label',style:'dike_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên cống thủy lợi',ename:'Label names for culverts',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'Culvert_points_label',style:'Culvert_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm khí tượng',ename:'Label names for Meteorological stations',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'Meteorological_station_points_label',style:'Meteorological_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các hồ chứa có dung tích lớn',ename:'Label names for large reservoirs',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'large_reservoir_polygon_label',style:'large_reservoir_polygon_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm thủy văn',ename:'Label names for hydrological stations',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'Hydrological_station_points_label',style:'Hydrological_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trụ sở văn phòng phòng chống lụt bão',ename:'Label names for DDMFSCs',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'DDMFSC_Office_points_label',style:'DDMFSC_Office_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên tỉnh',ename:'Label names for Provincial People Committees',l:'Province_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'Provincial_People_Committee_Points_label',style:'Provincial_People_Committee_Points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các huyện',ename:'Label names for ',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'District_People_committee_Point_label',style:'District_People_committee_Point_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các xã',ename:'Label names for District People committees',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'Communal_People_Committee_Points_label',style:'Communal_People_Committee_Points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình kè được đánh giá tổn thương',ename:'Label names for vulnerable embankments',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'Vulnerability_embankments_polyline_label',style:'Vulnerability_embankments_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình thủy lợi được đánh giá tổn thương',ename:'Label names for vulnerabe irrigations',l:'Vulnerability_irrigation_points_font_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'Vulnerability_irrigation_points_label',style:'Vulnerability_irrigation_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình đường giao thông được đánh giá tổn thương',ename:'Label names for vulnerable roads',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'vulnerability_roads_polyline_label',style:'vulnerability_roads_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy điện',ename:'Electricity power plan',l:'Electricity_power_plan_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy',ename:'Factory',l:'Factory_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nghĩa trang',ename:'Cementary',l:'Cementary_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Chùa',ename:'Pagoda',l:'Pagoda_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bưu điện',ename:'Post office',l:'Post_office_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tượng đài',ename:'Monument',l:'Monument_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm bơm',ename:'Pumping station',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'Pumping_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Đê',ename:'Dike',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'dike_polyline',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Cống',ename:'Culvert',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'Culvert_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thủy văn',ename:'Hydrological station',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'Hydrological_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Hồ chứa dung tích lớn',ename:'Large reservoir',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'large_reservoir_polygon',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm khí tượng',ename:'Meteorological station',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'Meteorological_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Biến thế',ename:'Electric transformer station',l:'Electric_transformer_station_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trường học',ename:'School',l:'School_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bệnh viện',ename:'Hospital',l:'Hospital_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trụ sở văn phòng phòng chống lụt bão',ename:'DDMFSC Office',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'DDMFSC_Office_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nơi trú ẩn',ename:'Safety place',l:'Safety_place_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND tỉnh',ename:'Provincial People Committee',l:'Province_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND huyện',ename:'District People committee',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'District_People_committee_Point',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND xã',ename:'Communal People Committee',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'Communal_People_Committee_Points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thông tin',ename:'Telecommunation station',l:'Telecommunation_station_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình kè',ename:'Embankments that were assessed vulnerability',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'vulnerability_embankments_polyline_en',style:'vulnerability_embankments_polyline',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình thủy lợi',ename:'Irrigations that were assessed vulnerability',l:'Vulnerability_irrigation_points_font_point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'Vulnerability_irrigation_points_en',style:'Vulnerability_irrigation_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình giao thông',ename:'Roads that were assessed vulnerability',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'vulnerability_roads_polyline_en',style:'vulnerability_roads_polyline',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Khu dân cư',ename:'Residential area',l:'Residential_area_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ranh giới tỉnh',ename:'Province boundary',l:'Province_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Ranh giới huyện',ename:'District boundary',l:'District_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ranh giới xã',ename:'Commune boundary',l:'Commune_boundary_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Sông suối (dạng đường)',ename:'River (polyline)',l:'River_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Sông suối (dạng vùng)',ename:'River (polygon)',l:'River_polygon',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Đường giao thông',ename:'Transportation',l:'Transportation_polyline',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'Transportation_polyline_en',style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Đường đồng mức độ cao',ename:'Elevation contour',l:'Main_contour_polyline',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Khu tập trung dân cư',ename:'High residential area density',l:'High_residential_area_density_polygon',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Khu vực nghiên cứu',ename:'Study_area',l:'Study_area_region',htmacdinh:1,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:true});
mapLayers.push({name:'Lưu vực sông suối chi tiết',ename:'River Sub-basin',l:'River_sub-basin_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Lưu vực sông suối chính',ename:'River_basin',l:'River_basin_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mật độ dân số',ename:'Commune_population density',l:'Commune_population_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'commune_population_polygon_en',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Phân bố rừng',ename:'Forest cover',l:'Forest_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'forest_polygon_en',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Phân bố sử dụng đất',ename:'Landuse',l:'Landuse_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh',ename:'Satellite image',l:'anhvetinh',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'',style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi dự báo cho giai đoạn hiện tại (2015)',ename:'Lanslide risk for irrigation constructions in current period.',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_ir_now_en',style:'landslide_risk_polygon_ir_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Lanslide risk for irrigation constructions  according to climate change scenario RCP 4.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_ir45_2025_en',style:'landslide_risk_polygon_ir45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Lanslide risk for irrigation constructions  according to climate change scenario RCP 4.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_ir45_2050_en',style:'landslide_risk_polygon_ir45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Lanslide risk for irrigation constructions  according to climate change scenario RCP 8.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_ir85_2025_en',style:'landslide_risk_polygon_ir85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Lanslide risk for irrigation constructions  according to climate change scenario RCP 8.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_ir85_2050_en',style:'landslide_risk_polygon_ir85_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông dự báo cho giai đoạn hiện tại (2015)',ename:'Lanslide risk for road constructions in current period.',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_rd_now_en',style:'landslide_risk_polygon_rd_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Lanslide risk for road constructions  according to climate change scenario RCP 4.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_rd45_2025_en',style:'landslide_risk_polygon_rd45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Lanslide risk for road constructions  according to climate change scenario RCP 4.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_rd45_2050_en',style:'landslide_risk_polygon_rd45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Lanslide risk for road constructions  according to climate change scenario RCP 8.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_rd85_2025_en',style:'landslide_risk_polygon_rd85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Lanslide risk for road constructions  according to climate change scenario RCP 8.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_rd85_2050_en',style:'landslide_risk_polygon_rd85_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè dự báo cho giai đoạn hiện tại (2015)',ename:'Lanslide risk for embankment constructions in current period.',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_em_now_en',style:'landslide_risk_polygon_em_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Lanslide risk for embankment constructions  according to climate change scenario RCP 4.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_em45_2025_en',style:'landslide_risk_polygon_em45_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Lanslide risk for embankment constructions  according to climate change scenario RCP 4.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_em45_2050_en',style:'landslide_risk_polygon_em45_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Lanslide risk for embankment constructions  according to climate change scenario RCP 8.5 in 2025',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_em85_2025_en',style:'landslide_risk_polygon_em85_2025',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro trượt lở đất đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Lanslide risk for embankment constructions  according to climate change scenario RCP 8.5 in 2050',l:'Landslide_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'landslide_risk_polygon_em85_2050_en',style:'landslide_risk_polygon_em85_2050',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi dự báo cho giai đoạn hiện tại (2015)',ename:'Flash flood risk for irrigation constructions in current period.',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_ir_now_en',style:'flash_flood_risk_polygon_ir_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Flash flood risk for irrigation constructions  according to climate change scenario RCP 4.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_ir45_25_en',style:'flash_flood_risk_polygon_ir45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Flash flood risk for irrigation constructions  according to climate change scenario RCP 4.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_ir45_50_en',style:'flash_flood_risk_polygon_ir45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Flash flood risk for irrigation constructions  according to climate change scenario RCP 8.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_ir85_25_en',style:'flash_flood_risk_polygon_ir85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Flash flood risk for irrigation constructions  according to climate change scenario RCP 8.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_ir85_2550_en',style:'flash_flood_risk_polygon_ir85_2550',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông dự báo cho giai đoạn hiện tại (2015)',ename:'Flash flood risk for road constructions in current period.',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_rd_now_en',style:'flash_flood_risk_polygon_rd_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Flash flood risk for road constructions  according to climate change scenario RCP 4.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_rd45_25_en',style:'flash_flood_risk_polygon_rd45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Flash flood risk for road constructions  according to climate change scenario RCP 4.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_rd45_50_en',style:'flash_flood_risk_polygon_rd45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Flash flood risk for road constructions  according to climate change scenario RCP 8.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_rd85_25_en',style:'flash_flood_risk_polygon_rd85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Flash flood risk for road constructions  according to climate change scenario RCP 8.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_rd85_2550_en',style:'flash_flood_risk_polygon_rd85_2550',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè dự báo cho giai đoạn hiện tại (2015)',ename:'Flash flood risk for embankment constructions in current period.',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_em_now_en',style:'flash_flood_risk_polygon_em_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',ename:'Flash flood risk for embankment constructions  according to climate change scenario RCP 4.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_em45_25_en',style:'flash_flood_risk_polygon_em45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',ename:'Flash flood risk for embankment constructions  according to climate change scenario RCP 4.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_em45_50_en',style:'flash_flood_risk_polygon_em45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',ename:'Flash flood risk for embankment constructions  according to climate change scenario RCP 8.5 in 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_em85_25_en',style:'flash_flood_risk_polygon_em85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',ename:'Flash flood risk for embankment constructions  according to climate change scenario RCP 8.5 in 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,estyle:'flash_flood_risk_polygon_em85_2550_en',style:'flash_flood_risk_polygon_em85_2550',isBaseLayer:false,visibility:false});




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


// combobox
// models
Ext.define("Province", {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'province', mapping: 'properties.Province'},
        {name: 'bbox', mapping: 'properties.bbox'}
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
        url: 'http://undp.vietkidz.com:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=Province_People_committee_Point_point&exceptions=text/javascript&outputFormat=application/json',
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
        url: 'http://undp.vietkidz.com:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=District_People_committee_Point_point&exceptions=text/javascript&outputFormat=application/json',
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
        url: 'http://undp.vietkidz.com:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=Communal_People_Committee_Points_point_point&exceptions=text/javascript&outputFormat=application/json',
        reader: {
            type: 'array',
            rootProperty: 'features'
        }
    },
    autoLoad: true
});
// end stores
var search_province_title = 'Tìm kiếm tỉnh';
var search_district_title = 'Tìm kiếm huyện';
var search_commune_title = 'Tìm kiếm xã';
if(_map_lang == 'en'){
    search_province_title = 'Search Province';
    search_district_title = 'Search district';
    search_commune_title = 'Search commune';
}

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
            var extent = new OpenLayers.Bounds(value);
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
    ret +='<label style="float:left;margin-left:3px;">Công ty TNHH Tư vấn <br/>Trường Đại học Thủy lợi</label>';
    return '<div>' + ret + '</div>';
}
function _project_html_2(){
    var ret = '<img src="undp-logo.jpg" height="40px" style="float:left;"/>';
    ret +='<label style="float:left;margin-left:10px;">Dự án: Tăng cường Khả năng Chống chịu Khí hậu cho Cơ sở hạ tầng các tỉnh miền núi phía Bắc<br/>Hợp phần: TĂNG CƯỜNG CƠ SỞ DỮ LIỆU KHÔNG GIAN VÀ ATLAS CHO CƠ SỞ HẠ TẦNG NÔNG THÔN CÁC TỈNH MIỀN NÚI PHÍA BẮC VIỆT NAM</label>';
    return '<div>' + ret + '</div>';
}

function _map_super_panel_by_attr(datas,f){
    var projectHtml = _project_html_2();
	var controls = [];
	controls.push(
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.PanPanel()
            // new OpenLayers.Control.ZoomPanel()
			// new OpenLayers.Control.LayerSwitcher()
        );
	/*controls.push(new OpenLayers.Control.WMSGetFeatureInfo({
		autoActivate: true,
		infoFormat: "application/vnd.ogc.gml",
		maxFeatures: 1,
		eventListeners: {
			"getfeatureinfo": function(e) {
				var items = [];
				Ext.each(e.features, function(feature) {
					items.push({
						xtype: "propertygrid",
						title: feature.fid,
						source: feature.attributes
					});
				});
				new GeoExt.Popup({
					title: "Feature Info",
					width: 200,
					height: 200,
					layout: "accordion",
					map: mapPanel,
					location: e.xy,
					items: items
				}).show();
			}
		}
	}));
*/
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

var mapViewOptions = [
    { value: 'htmacdinh', name: 'Mặc định' },
    { value: 'htdongian', name: 'Đơn giản' },
    { value: 'htchitiet', name: 'Chi tiết' },
    { value: 'httuychon', name: 'Tùy chọn' }
];
var layerTitle = "Lớp thông tin";
var mapOptionLabel =  'Chế độ hiển thị';
if (_map_lang == 'en'){
    mapViewOptions = [
        { value: 'htmacdinh', name: 'Default Map' },
        { value: 'htdongian', name: 'Simple Map' },
        { value: 'htchitiet', name: 'Detail Map' },
        { value: 'httuychon', name: 'Optional Map' }
    ];
    layerTitle = "Layers";
    mapOptionLabel =  'Display Level';
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
							/*filter:function(record) {
								var layer = record.getLayer();
								//return layer.data.httuychon === 1;
								return layer.data[filterAttr] === 1;
							},*/
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
var app = Ext.application({
    name: 'Tree Legend',
    launch: function() {
		mapPanel = _map_super_panel_by_attr(mapLayers,filterAttr);
		//mapPanel.map.addControl(new OpenLayers.Control.LayerSwitcher());

		store = _create_store();
        var langtoolbar = {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    icon: 'Vietnam_Flag.png',
                    disabled: true
                },
                {
                    xtype: 'button',
                    icon: 'United_Kingdom_Flag.png',
                    handler: function() {
                        var url = window.location.href;
                        window.location.replace(url + "?lang=en");
                    }
                }
				,
                {
                    text   : 'Giới thiệu dự án',
					handler: function() {
                        var url = window.location.href;
                        window.location.replace("/gis");
                    }
                }
            ]
        };
        if(_map_lang == 'en'){
            var langtoolbar = {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        icon: 'Vietnam_Flag.png',
                        handler: function() {
                            var url = window.location.href;
                            var index = 0;
                            index = url.indexOf('?');
                            url = url.substring(0, index);
                            window.location.replace(url);
                        }
                    },
                    {
                        xtype: 'button',
                        icon: 'United_Kingdom_Flag.png',
                        disabled: true
                    },
					{
						text   : 'About Project',
						handler: function() {
							var url = window.location.href;
							window.location.replace("/gis");
						}
					}
                ]
            };
        }
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
				labelWidth: 100,
				fieldLabel: mapOptionLabel,
				displayField: 'name',
				valueField: 'value',
				//labelStyle: 'cursor:move;',
				//margin: '0 5 0 0',
				store: Ext.create('Ext.data.Store', {
					fields: ['value', 'name'],
					data : mapViewOptions
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
						
						for(var i = mapLayers.length-1; i>=0;i--){
							obj = mapLayers[i];
							if (obj[filterAttr] === 1){
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