<?php
/*
    Новости
*/

require_once dirname(dirname(__FILE__)) . '/resources/getdata.class.php';

class modWebPortfolioGetdataProcessor extends modWebResourcesGetdataProcessor{


    public function afterIteration(array $list){
        
        $list = parent::afterIteration($list);
        
        $images_url = $this->getSourcePath();
        
        
        foreach($list as & $l){
            
            /*
                Приводим в порядок картинки из MIGX
            */
            
            if(!empty($l['tvs']['gallery']['value']) AND $gallery = json_decode($l['tvs']['gallery']['value'], true)){
                
                $l['gallery'] = array();
                
                foreach($gallery as $item){
                    $item['image'] = $images_url.$item['image'];
                    $l['gallery'][] = $item;
                }
                
            }
            
            /*
                Получаем картинку
            */
            if(!empty($l['tvs']['image']['value'])){ 
                
                $l['image'] =  $images_url.$l['tvs']['image']['value'];
                
            }
            
        } 
        //uasort($list, function($a, $b) { return $a['MIGX_id']<$b['MIGX_id']?1:-1; });
    
        return $list;
    }    
    
}


return 'modWebPortfolioGetdataProcessor';