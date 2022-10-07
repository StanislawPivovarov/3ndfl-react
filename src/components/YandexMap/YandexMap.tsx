
import {YMaps, Map, Placemark} from "react-yandex-maps";
import pointer from "../../assets/images/pointer.png"

const mapState = { center: [55.758266, 37.626502], zoom: 17 };

function MyPlacemark(){
return(
<YMaps
    enterprise
    query={{
      apikey: '9440f975-6e8c-4e36-9e6f-2dcdfb5b50bf',
    }}
    >
    <Map state={mapState} width="100%">

      <Placemark
        PlacemarkGeometry={{
          coordinates: [55.751574, 37.573856]
        }}
        options={{
            iconLayout: 'default#image',
            iconImageHref: {pointer},
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
          }}
      />
    </Map>
  </YMaps>
);

}

export default MyPlacemark;