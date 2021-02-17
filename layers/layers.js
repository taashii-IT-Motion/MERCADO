var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_MUVO_1 = new ol.format.GeoJSON();
var features_MUVO_1 = format_MUVO_1.readFeatures(json_MUVO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUVO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUVO_1.addFeatures(features_MUVO_1);
var lyr_MUVO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUVO_1, 
                style: style_MUVO_1,
                interactive: true,
                title: '<img src="styles/legend/MUVO_1.png" /> MUVO'
            });
var format_SMARTTAXI_2 = new ol.format.GeoJSON();
var features_SMARTTAXI_2 = format_SMARTTAXI_2.readFeatures(json_SMARTTAXI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTTAXI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTTAXI_2.addFeatures(features_SMARTTAXI_2);
var lyr_SMARTTAXI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMARTTAXI_2, 
                style: style_SMARTTAXI_2,
                interactive: true,
                title: '<img src="styles/legend/SMARTTAXI_2.png" /> SMART TAXI'
            });
var format_EASYTAXI_3 = new ol.format.GeoJSON();
var features_EASYTAXI_3 = format_EASYTAXI_3.readFeatures(json_EASYTAXI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EASYTAXI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EASYTAXI_3.addFeatures(features_EASYTAXI_3);
var lyr_EASYTAXI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EASYTAXI_3, 
                style: style_EASYTAXI_3,
                interactive: true,
                title: '<img src="styles/legend/EASYTAXI_3.png" /> EASY TAXI'
            });
var format_PICAP_4 = new ol.format.GeoJSON();
var features_PICAP_4 = format_PICAP_4.readFeatures(json_PICAP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PICAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PICAP_4.addFeatures(features_PICAP_4);
var lyr_PICAP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PICAP_4, 
                style: style_PICAP_4,
                interactive: true,
                title: '<img src="styles/legend/PICAP_4.png" /> PICAP'
            });
var format_CABIFY_5 = new ol.format.GeoJSON();
var features_CABIFY_5 = format_CABIFY_5.readFeatures(json_CABIFY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABIFY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABIFY_5.addFeatures(features_CABIFY_5);
var lyr_CABIFY_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CABIFY_5, 
                style: style_CABIFY_5,
                interactive: true,
                title: '<img src="styles/legend/CABIFY_5.png" /> CABIFY'
            });
var format_DIDI_6 = new ol.format.GeoJSON();
var features_DIDI_6 = format_DIDI_6.readFeatures(json_DIDI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIDI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIDI_6.addFeatures(features_DIDI_6);
var lyr_DIDI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIDI_6, 
                style: style_DIDI_6,
                interactive: true,
                title: '<img src="styles/legend/DIDI_6.png" /> DIDI'
            });
var format_BEAT_7 = new ol.format.GeoJSON();
var features_BEAT_7 = format_BEAT_7.readFeatures(json_BEAT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEAT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEAT_7.addFeatures(features_BEAT_7);
var lyr_BEAT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEAT_7, 
                style: style_BEAT_7,
                interactive: true,
                title: '<img src="styles/legend/BEAT_7.png" /> BEAT'
            });
var format_UBER_8 = new ol.format.GeoJSON();
var features_UBER_8 = format_UBER_8.readFeatures(json_UBER_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBER_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBER_8.addFeatures(features_UBER_8);
var lyr_UBER_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBER_8, 
                style: style_UBER_8,
                interactive: true,
                title: '<img src="styles/legend/UBER_8.png" /> UBER'
            });
var format_TM_9 = new ol.format.GeoJSON();
var features_TM_9 = format_TM_9.readFeatures(json_TM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_9.addFeatures(features_TM_9);
var lyr_TM_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TM_9, 
                style: style_TM_9,
                interactive: true,
                title: '<img src="styles/legend/TM_9.png" /> TM'
            });
var format_AtracciondeVaijes_10 = new ol.format.GeoJSON();
var features_AtracciondeVaijes_10 = format_AtracciondeVaijes_10.readFeatures(json_AtracciondeVaijes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtracciondeVaijes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtracciondeVaijes_10.addFeatures(features_AtracciondeVaijes_10);
var lyr_AtracciondeVaijes_10 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_AtracciondeVaijes_10, 
                radius: 10 * 2,
                gradient: ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'],
                blur: 15,
                shadow: 250,
                title: 'Atraccion de Vaijes'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_MUVO_1.setVisible(true);lyr_SMARTTAXI_2.setVisible(true);lyr_EASYTAXI_3.setVisible(true);lyr_PICAP_4.setVisible(true);lyr_CABIFY_5.setVisible(true);lyr_DIDI_6.setVisible(true);lyr_BEAT_7.setVisible(true);lyr_UBER_8.setVisible(true);lyr_TM_9.setVisible(true);lyr_AtracciondeVaijes_10.setVisible(false);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_MUVO_1,lyr_SMARTTAXI_2,lyr_EASYTAXI_3,lyr_PICAP_4,lyr_CABIFY_5,lyr_DIDI_6,lyr_BEAT_7,lyr_UBER_8,lyr_TM_9,lyr_AtracciondeVaijes_10];
lyr_MUVO_1.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_SMARTTAXI_2.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_EASYTAXI_3.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_PICAP_4.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_CABIFY_5.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_DIDI_6.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_BEAT_7.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_UBER_8.set('fieldAliases', {'id_hogar': 'id_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_TM_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STOP_CODE': 'STOP_CODE', 'STOP_NAME': 'STOP_NAME', 'ROUTE_SHOR': 'ROUTE_SHOR', 'AGENCY_NAM': 'AGENCY_NAM', 'COMPONENTE': 'COMPONENTE', 'X': 'X', 'Y': 'Y', });
lyr_MUVO_1.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_SMARTTAXI_2.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_EASYTAXI_3.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': 'TextEdit', });
lyr_PICAP_4.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_CABIFY_5.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_DIDI_6.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_BEAT_7.set('fieldImages', {'id_hogar': 'Hidden', 'zat_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'TextEdit', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_UBER_8.set('fieldImages', {'id_hogar': 'Hidden', 'municipio_hogar': 'Hidden', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Hidden', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'Hidden', 'zat_destino': 'Hidden', 'municipio': 'Hidden', 'hora_llegada': 'Hidden', 'Usa_aplicacion': 'Hidden', 'mun_origen': 'Hidden', 'mun_destino': 'Hidden', 'ORIGEN': 'Hidden', 'DESTINO': 'Hidden', 'utam_origen': 'Hidden', 'utam_destino': 'Hidden', 'modo_principal': 'Hidden', 'Viajes_Parecidos': '', });
lyr_TM_9.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'STOP_CODE': 'Hidden', 'STOP_NAME': 'TextEdit', 'ROUTE_SHOR': 'TextEdit', 'AGENCY_NAM': 'Hidden', 'COMPONENTE': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_MUVO_1.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_SMARTTAXI_2.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_EASYTAXI_3.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_PICAP_4.set('fieldLabels', {'estrato_hogar': 'header label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_CABIFY_5.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_DIDI_6.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_BEAT_7.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'utam_origen': 'inline label', 'Viajes_Parecidos': 'no label', });
lyr_UBER_8.set('fieldLabels', {'estrato_hogar': 'inline label', 'edad_personaviaje': 'inline label', 'Sexo': 'inline label', 'motivo_viaje': 'inline label', 'Viajes_Parecidos': 'inline label', });
lyr_TM_9.set('fieldLabels', {'STOP_NAME': 'inline label', 'ROUTE_SHOR': 'no label', });
lyr_TM_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});