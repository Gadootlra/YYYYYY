var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> الكافتريات'
            });
var format_tree_1_1 = new ol.format.GeoJSON();
var features_tree_1_1 = format_tree_1_1.readFeatures(json_tree_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tree_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tree_1_1.addFeatures(features_tree_1_1);
var lyr_tree_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tree_1_1, 
                style: style_tree_1_1,
                interactive: true,
                title: '<img src="styles/legend/tree_1_1.png" /> tree_1'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الاقسام'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> الحمامات'
            });
var format_poin_4 = new ol.format.GeoJSON();
var features_poin_4 = format_poin_4.readFeatures(json_poin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poin_4.addFeatures(features_poin_4);
var lyr_poin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poin_4, 
                style: style_poin_4,
                interactive: true,
                title: '<img src="styles/legend/poin_4.png" /> poin'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> القاعات'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___6, 
                style: style___6,
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> المدخل_الغربي'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> المراسم'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> المساجد'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> المصلى'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> المعامل'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> الورش'
            });
var format__ND2_Junctions_12 = new ol.format.GeoJSON();
var features__ND2_Junctions_12 = format__ND2_Junctions_12.readFeatures(json__ND2_Junctions_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__ND2_Junctions_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__ND2_Junctions_12.addFeatures(features__ND2_Junctions_12);
var lyr__ND2_Junctions_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__ND2_Junctions_12, 
                style: style__ND2_Junctions_12,
                interactive: true,
                title: '<img src="styles/legend/_ND2_Junctions_12.png" /> جامعه_ND2_Junctions'
            });
var format__ND_Junctions_13 = new ol.format.GeoJSON();
var features__ND_Junctions_13 = format__ND_Junctions_13.readFeatures(json__ND_Junctions_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__ND_Junctions_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__ND_Junctions_13.addFeatures(features__ND_Junctions_13);
var lyr__ND_Junctions_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__ND_Junctions_13, 
                style: style__ND_Junctions_13,
                interactive: true,
                title: '<img src="styles/legend/_ND_Junctions_13.png" /> جامعه_ND_Junctions'
            });
var format___14 = new ol.format.GeoJSON();
var features___14 = format___14.readFeatures(json___14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___14.addFeatures(features___14);
var lyr___14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___14, 
                style: style___14,
                interactive: true,
                title: '<img src="styles/legend/__14.png" /> حدائق_صغيره'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15, 
                style: style__15,
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> طريق'
            });
var format___16 = new ol.format.GeoJSON();
var features___16 = format___16.readFeatures(json___16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___16.addFeatures(features___16);
var lyr___16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___16, 
                style: style___16,
                interactive: true,
                title: '<img src="styles/legend/__16.png" /> مجمع_القاعات'
            });
var format___17 = new ol.format.GeoJSON();
var features___17 = format___17.readFeatures(json___17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___17.addFeatures(features___17);
var lyr___17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___17, 
                style: style___17,
                interactive: true,
                title: '<img src="styles/legend/__17.png" /> مكاتب_الادارات'
            });
var format___18 = new ol.format.GeoJSON();
var features___18 = format___18.readFeatures(json___18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___18.addFeatures(features___18);
var lyr___18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___18, 
                style: style___18,
                interactive: true,
                title: '<img src="styles/legend/__18.png" /> مكتبة_القراءه'
            });
var format___19 = new ol.format.GeoJSON();
var features___19 = format___19.readFeatures(json___19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___19.addFeatures(features___19);
var lyr___19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___19, 
                style: style___19,
                interactive: true,
                title: '<img src="styles/legend/__19.png" /> مكتبه_الادوات'
            });
var format__20 = new ol.format.GeoJSON();
var features__20 = format__20.readFeatures(json__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20.addFeatures(features__20);
var lyr__20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__20, 
                style: style__20,
                interactive: true,
                title: '<img src="styles/legend/_20.png" /> ممر'
            });
var format__21 = new ol.format.GeoJSON();
var features__21 = format__21.readFeatures(json__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21.addFeatures(features__21);
var lyr__21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__21, 
                style: style__21,
                interactive: true,
                title: '<img src="styles/legend/_21.png" /> ممرات'
            });
var format___22 = new ol.format.GeoJSON();
var features___22 = format___22.readFeatures(json___22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___22.addFeatures(features___22);
var lyr___22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___22, 
                style: style___22,
                interactive: true,
                title: '<img src="styles/legend/__22.png" /> مناطق_إضافيه'
            });
var format___23 = new ol.format.GeoJSON();
var features___23 = format___23.readFeatures(json___23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___23.addFeatures(features___23);
var lyr___23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___23, 
                style: style___23,
                interactive: true,
                title: '<img src="styles/legend/__23.png" /> مناطق_فارقه'
            });

lyr__0.setVisible(true);lyr_tree_1_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr_poin_4.setVisible(true);lyr__5.setVisible(true);lyr___6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__ND2_Junctions_12.setVisible(true);lyr__ND_Junctions_13.setVisible(true);lyr___14.setVisible(true);lyr__15.setVisible(true);lyr___16.setVisible(true);lyr___17.setVisible(true);lyr___18.setVisible(true);lyr___19.setVisible(true);lyr__20.setVisible(true);lyr__21.setVisible(true);lyr___22.setVisible(true);lyr___23.setVisible(true);
var layersList = [lyr__0,lyr_tree_1_1,lyr__2,lyr__3,lyr_poin_4,lyr__5,lyr___6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__ND2_Junctions_12,lyr__ND_Junctions_13,lyr___14,lyr__15,lyr___16,lyr___17,lyr___18,lyr___19,lyr__20,lyr__21,lyr___22,lyr___23];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الكافتريا': 'اسم الكافتريا', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء عدد المكيفات', 'عدد_المكيفات': 'عدد المكيفات', 'عدد_الاصناف': 'عدد الاصناف', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_tree_1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_القسم': 'اسم القسم', 'عدد_الطوابق': 'عدد الطوابق', 'عددالقاعات': 'عددالقاعات', 'عدد_المعامل': 'عدد المعامل', 'عدد_المكاتب': 'عدد المكاتب', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم__مكان_الحمامات': 'اسم/ مكان الحمامات', 'المداخل': 'المداخل', 'الابواب': 'الابواب', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_poin_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'رقم_القاعة': 'رقم القاعة', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_البينشات': 'عدد البينشات', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'إضافات_اخرى': 'إضافات اخرى', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المرسم': 'اسم المرسم', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_البينشات': 'عدد البينشات', 'عدد_المكيفات': 'عدد المكيفات', 'الإضافات': 'الإضافات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المسجد': 'اسم المسجد', 'الطوابق': 'الطوابق', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_مكان_المصلى': 'اسم/مكان المصلى', });
lyr__10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المعمل': 'اسم المعمل', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الورشه': 'اسم الورشه', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__ND2_Junctions_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__ND_Junctions_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr___14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الحديقه': 'اسم الحديقه', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr___16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المجمع': 'اسم المجمع', 'عدد_الطوابق': 'عدد الطوابق', 'عدد_القاعات': 'عدد القاعات', 'عدد_المعامل': 'عدد المعامل', 'عدد_الابواب': 'عدد البواب', 'عدد_النوافذ': 'عدد النوافذ', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكاتب': 'اسم المكاتب', 'المداخل': 'عدد المداخل', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'المكيفات': 'المكيفات', 'مراوح_الهواء': 'مراوح الهواء', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكتبه': 'اسم المكتبه', 'الطوابق': 'الطوابق', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المكتبه': 'اسم المكتبه', 'الابواب': 'الابواب', 'النوافذ': 'النوافذ', 'مراوح_الهواء': 'مراوح الهواء', 'المكيفات': 'المكيفات', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr__21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr___22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المنطقه': 'اسم المنطقه', 'عدد_المباني': 'عدد المباني', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr___23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__0.set('fieldImages', {'OBJECTID': '', 'اسم_الكافتريا': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'عدد_الاصناف': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_tree_1_1.set('fieldImages', {'OBJECTID': '', });
lyr__2.set('fieldImages', {'OBJECTID': '', 'اسم_القسم': '', 'عدد_الطوابق': '', 'عددالقاعات': '', 'عدد_المعامل': '', 'عدد_المكاتب': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__3.set('fieldImages', {'OBJECTID': '', 'اسم__مكان_الحمامات': '', 'المداخل': '', 'الابواب': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_poin_4.set('fieldImages', {'OBJECTID': '', });
lyr__5.set('fieldImages', {'OBJECTID': '', 'رقم_القاعة': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_البينشات': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'إضافات_اخرى': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___6.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__7.set('fieldImages', {'OBJECTID': '', 'اسم_المرسم': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_البينشات': '', 'عدد_المكيفات': '', 'الإضافات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__8.set('fieldImages', {'OBJECTID': '', 'اسم_المسجد': '', 'الطوابق': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__9.set('fieldImages', {'OBJECTID': '', 'اسم_مكان_المصلى': '', });
lyr__10.set('fieldImages', {'OBJECTID': '', 'اسم_المعمل': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__11.set('fieldImages', {'OBJECTID': '', 'اسم_الورشه': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__ND2_Junctions_12.set('fieldImages', {'OBJECTID': '', });
lyr__ND_Junctions_13.set('fieldImages', {'OBJECTID': '', });
lyr___14.set('fieldImages', {'OBJECTID': '', 'اسم_الحديقه': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__15.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', });
lyr___16.set('fieldImages', {'OBJECTID': '', 'اسم_المجمع': '', 'عدد_الطوابق': '', 'عدد_القاعات': '', 'عدد_المعامل': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___17.set('fieldImages', {'OBJECTID': '', 'اسم_المكاتب': '', 'المداخل': '', 'الابواب': '', 'النوافذ': '', 'المكيفات': '', 'مراوح_الهواء': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___18.set('fieldImages', {'OBJECTID': '', 'اسم_المكتبه': '', 'الطوابق': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___19.set('fieldImages', {'OBJECTID': '', 'اسم_المكتبه': '', 'الابواب': '', 'النوافذ': '', 'مراوح_الهواء': '', 'المكيفات': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__20.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', });
lyr__21.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', });
lyr___22.set('fieldImages', {'OBJECTID': '', 'اسم_المنطقه': '', 'عدد_المباني': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr___23.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__0.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الكافتريا': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'عدد_الاصناف': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_tree_1_1.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_القسم': 'no label', 'عدد_الطوابق': 'no label', 'عددالقاعات': 'no label', 'عدد_المعامل': 'no label', 'عدد_المكاتب': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'اسم__مكان_الحمامات': 'no label', 'المداخل': 'no label', 'الابواب': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_poin_4.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'no label', 'رقم_القاعة': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_البينشات': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'إضافات_اخرى': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___6.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__7.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المرسم': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_البينشات': 'no label', 'عدد_المكيفات': 'no label', 'الإضافات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__8.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المسجد': 'no label', 'الطوابق': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__9.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_مكان_المصلى': 'no label', });
lyr__10.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المعمل': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__11.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الورشه': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__ND2_Junctions_12.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__ND_Junctions_13.set('fieldLabels', {'OBJECTID': 'no label', });
lyr___14.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الحديقه': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__15.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr___16.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المجمع': 'no label', 'عدد_الطوابق': 'no label', 'عدد_القاعات': 'no label', 'عدد_المعامل': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___17.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكاتب': 'no label', 'المداخل': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'المكيفات': 'no label', 'مراوح_الهواء': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___18.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكتبه': 'no label', 'الطوابق': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___19.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المكتبه': 'no label', 'الابواب': 'no label', 'النوافذ': 'no label', 'مراوح_الهواء': 'no label', 'المكيفات': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__20.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr__21.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', });
lyr___22.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المنطقه': 'no label', 'عدد_المباني': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___23.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr___23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});