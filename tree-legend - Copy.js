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
    // We need to require this class, even though it is used by Ext.EventObjectImpl
    // see: http://www.sencha.com/forum/showthread.php?262124-Missed-(-)-dependency-reference-to-a-Ext.util.Point-in-Ext.EventObjectImpl
    'Ext.util.Point'
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

mapLayers.push({name:'Tên các trạm bơm',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Pumping_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các tuyến đê',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'dike_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên cống thủy lợi',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'Culvert_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm khí tượng',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Meteorological_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các hồ chứa có dung tích lớn',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'large_reservoir_polygon_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trạm thủy văn',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Hydrological_station_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các trụ sở văn phòng phòng chống lụt bão',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'DDMFSC_Office_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên tỉnh',l:'Province_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'Provincial_People_Committee_Points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các huyện',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'District_People_committee_Point_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên các xã',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'Communal_People_Committee_Points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình kè được đánh giá tổn thương',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Vulnerability_embankments_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình thủy lợi được đánh giá tổn thương',l:'Vulnerability_irrigation_points_font_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Vulnerability_irrigation_points_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tên của các công trình đường giao thông được đánh giá tổn thương',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'vulnerability_roads_polyline_label',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy điện',l:'Electricity_power_plan_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nhà máy',l:'Factory_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nghĩa trang',l:'Cementary_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Chùa',l:'Pagoda_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bưu điện',l:'Post_office_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Tượng đài',l:'Monument_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm bơm',l:'Pumping_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Pumping_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Đê',l:'Dike_Polyline',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'dike_polyline',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Cống',l:'Culvert_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Culvert_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thủy văn',l:'Hydrological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Hydrological_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Hồ chứa dung tích lớn',l:'Large_reservoir_polygon',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'large_reservoir_polygon',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm khí tượng',l:'Meteorological_station_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'Meteorological_station_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Biến thế',l:'Electric_transformer_station_point',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trường học',l:'School_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Bệnh viện',l:'Hospital_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trụ sở văn phòng phòng chống lụt bão',l:'DDMFSC_Office_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'DDMFSC_Office_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Nơi trú ẩn',l:'Safety_place_points',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND tỉnh',l:'Province_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND huyện',l:'District_People_committee_Point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'District_People_committee_Point',isBaseLayer:false,visibility:false});
mapLayers.push({name:'UBND xã',l:'Communal_People_Committee_Points',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'Communal_People_Committee_Points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Trạm thông tin',l:'Telecommunation_station_point',htmacdinh:0,htdongian:0,htchitiet:1,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình kè',l:'Vulnerability_embankments_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'vulnerability_embankments_polyline',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình thủy lợi',l:'Vulnerability_irrigation_points_font_point',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'Vulnerability_irrigation_points',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mức độ tổn thương của các công trình giao thông',l:'Vulnerability_roads_polyline',htmacdinh:0,htdongian:1,htchitiet:1,httuychon:1,singleTile:true,style:'vulnerability_roads_polyline',isBaseLayer:false,visibility:false});
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
mapLayers.push({name:'Lưu vực sông suối chi tiết',l:'River_sub-basin_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Lưu vực sông suối chính',l:'River_basin_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Mật độ dân số',l:'Commune_population_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Phân bố rừng',l:'Forest_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Phân bố sử dụng đất',l:'Landuse_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});

/*
mapLayers.push({name:'Ảnh vệ tinh cảnh 1',l:'1290452015052',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 2',l:'1290442015052',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 3',l:'1280462015029',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 4',l:'1280452015077',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 5',l:'1280442015077',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 6',l:'1270452015182',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 7',l:'1270442014019',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Ảnh vệ tinh cảnh 8',l:'1260452014364',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});
*/
mapLayers.push({name:'Ảnh vệ tinh',l:'anhvetinh',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'',isBaseLayer:false,visibility:false});

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

mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi dự báo cho giai đoạn hiện tại (2015)',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_ir_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_ir45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_ir45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_ir85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình thủy lợi theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_ir85_2550',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông dự báo cho giai đoạn hiện tại (2015)',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_rd_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_rd45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_rd45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_rd85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình đường giao thông theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_rd85_2550',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè dự báo cho giai đoạn hiện tại (2015)',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_em_now',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_em45_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP4.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_em45_50',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2025',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_em85_25',isBaseLayer:false,visibility:false});
mapLayers.push({name:'Rủi ro lũ quét đối với công trình kè theo kịch bản BĐKH RCP8.5 dự báo cho năm 2050',l:'Flash_flood_risk_polygon',htmacdinh:0,htdongian:0,htchitiet:0,httuychon:1,singleTile:true,style:'flash_flood_risk_polygon_em85_2550',isBaseLayer:false,visibility:false});


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
function _map_super_panel_by_attr(datas,f){
	var controls = [];
	controls.push(
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.PanPanel(),
            new OpenLayers.Control.ZoomPanel()
        );
	controls.push(new OpenLayers.Control.WMSGetFeatureInfo({
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
	return Ext.create('GeoExt.MapPanel', {
		region: "center",
		map: {
			controls: controls
		},
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
					text: "Lớp thông tin"
				}
			]
		}
	});
}
function _project_html(){
	var ret = '<img src="logo.png" height="40px" style="float:left;"/>';
	//ret +='<label style="float:left;margin-left:3px;">TLUC</label>';
	ret +='<label style="float:left;">Công ty TNHH Tư vấn <br/>Trường Đại học Thủy lợi</label>';
	return '<div >' + ret + '</div>';
	
	return 'Công ty TNHH Tư vấn <br/>Trường Đại học Thủy lợi';
}
var filterAttr = 'htmacdinh';
var mapPanel;
var store;
var projectHtml = _project_html();
var app = Ext.application({
    name: 'Tree Legend',
    launch: function() {
		mapPanel = _map_super_panel_by_attr(mapLayers,filterAttr); //_map_super_panel(mapLayers);
		store = _create_store();
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
				fieldLabel: 'Chế độ hiển thị',
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
			}]
        });

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