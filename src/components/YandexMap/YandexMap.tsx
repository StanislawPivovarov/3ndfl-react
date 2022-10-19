
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import pointer from "../../assets/images/pointer.png"
import { MapWrapper } from "../../styles/YMaps";

const mapState = { center: [55.758266, 37.626502], zoom: 17};

function MyPlacemark(){
return(
  <MapWrapper>
<YMaps
    enterprise
    query={{
      apikey: '9440f975-6e8c-4e36-9e6f-2dcdfb5b50bf',
    }}
    >
    <Map state={mapState} width="100%" height="100%">

      <Placemark geometry={[55.758266, 37.626502]}/>
         <ZoomControl />
    </Map>
  </YMaps>
  </MapWrapper>


);

}

export default MyPlacemark;