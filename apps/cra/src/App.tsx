import {RawAndDistComponent} from 'raw-and-dist';
import {MyMap} from "leaflet-stuff";

export const App = () => {
  return (
      <span>
        <h1>Welcome CRA</h1>
        <RawAndDistComponent/>
        <div style={{height: '800px'}}>
          <MyMap/>
        </div>
      </span>
  )
}
