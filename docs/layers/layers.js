var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_form1__urbanqualityassessment_1 = new ol.format.GeoJSON();
var features_form1__urbanqualityassessment_1 = format_form1__urbanqualityassessment_1.readFeatures(json_form1__urbanqualityassessment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_form1__urbanqualityassessment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_form1__urbanqualityassessment_1.addFeatures(features_form1__urbanqualityassessment_1);
var lyr_form1__urbanqualityassessment_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_form1__urbanqualityassessment_1, 
                style: style_form1__urbanqualityassessment_1,
                interactive: true,
                title: '<img src="styles/legend/form1__urbanqualityassessment_1.png" /> form-1__urban-quality-assessment'
            });

lyr_OSMStandard_0.setVisible(true);lyr_form1__urbanqualityassessment_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_form1__urbanqualityassessment_1];
lyr_form1__urbanqualityassessment_1.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_form1__urbanqualityassessment_1.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', 'field_10': '', 'field_11': '', 'field_12': '', });
lyr_form1__urbanqualityassessment_1.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_form1__urbanqualityassessment_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});