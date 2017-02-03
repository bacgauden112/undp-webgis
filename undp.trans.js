/* define translate */
var _global_curr_lang;
_global_curr_lang = '';
var _text_map = {};
function __t(t){
	if (!_global_curr_lang || (_global_curr_lang == 'vi')){
		return t;
	}
	if (_text_map[t]) return _text_map[t];
	return t;
}
function __set_lang(lg){
	_global_curr_lang = lg;
}

_text_map['Công ty TNHH Tư vấn <br/>Trường Đại học Thủy lợi'] = 'Thuyloi University <br/>Consultant Company';

_text_map['Dự án: Tăng cường Khả năng Chống chịu Khí hậu cho Cơ sở hạ tầng các tỉnh miền núi phía Bắc<br/>Gói thầu: TĂNG CƯỜNG CƠ SỞ DỮ LIỆU KHÔNG GIAN VÀ ATLAS CHO CƠ SỞ HẠ TẦNG NÔNG THÔN CÁC TỈNH MIỀN NÚI PHÍA BẮC VIỆT NAM'] = 'Project: The Promoting Climate Resilient Infrastructure in Northern Mountain Provinces of Vietnam<br/><span style="font-size:12px;">FOR ENHANCEMENT OF A DIGITAL DATABASE AND ATLAS OF RURAL INFRASTRUCTURE FOR THE NORTHERN MOUNTAINOUS REGION OF VIETNAM</span>';

_text_map['Mặc định'] = 'Default';
_text_map['Đơn giản'] = 'Simple';
_text_map['Chi tiết'] = 'Detail';
_text_map['Tùy chọn'] = 'Optional';
_text_map['Lớp thông tin'] = 'Layers';
_text_map['Chế độ hiển thị'] = 'Display';
_text_map['Hiển thị'] = 'Display';
_text_map['Giới thiệu dự án'] = 'About Project';
_text_map['Tìm kiếm tỉnh'] = 'Search Province';
_text_map['Tìm kiếm huyện'] = 'Search District';
_text_map['Tìm kiếm xã'] = 'Search Commune';
_text_map['Tree Legend'] = 'Tree Legend';
_text_map[''] = '';

