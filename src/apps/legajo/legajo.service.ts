import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {
    Headers,
    RequestOptions,
    RequestMethod,
    Request
} from '@angular/http';

import {
    Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LegajoService {
    constructor(private http: Http) {}

    /*private depaUrl: string = 'http://192.168.200.123:8081/segrecargaDepa/';
    private provUrl: string = 'http://192.168.200.123:8081/segrecargaProv/';
    private distUrl: string = 'http://192.168.200.123:8081/segrecargaDis/';
    private zonaUrl: string = 'http://192.168.200.123:8081/segrecargaZona/';
    //private tablaUrl: string = 'http://192.168.200.123:8081/segrecargaTabla/';
    private tablaUrlAux: string = 'http://192.168.200.123:8081/crorecargaTabla01/';
    private tablaUrlAux2: string = 'http://192.168.200.123:8081/crorecargaTabla02/';*/

    /*private depaUrl: string = 'http://127.0.0.1:8000/recargaDepa/';
    private provUrl: string = 'http://127.0.0.1:8000/recargaProv/';
    private distUrl: string = 'http://127.0.0.1:8000/recargaDis/';
    private zonaUrl: string = 'http://127.0.0.1:8000/recargaZona/';
    private tablaUrlAux: string = 'http://127.0.0.1:8000/crorecargaTabla01/';
    private tablaUrlAux2: string = 'http://127.0.0.1:8000/crorecargaTabla02/';*/

    private tablaUrlAux: string = 'http://lfarfan.inei.com.pe:81/crorecargaTabla01/';
    private tablaUrlAux2: string = 'http://lfarfan.inei.com.pe:81/crorecargaTabla02/';
    private DepasUrl: string = 'http://172.16.2.185:8000/cargardepas/';
    private ProvinciasUrl: string = 'http://172.16.2.185:8000/cargardeprov/';
    private ZonasUrl: string = 'http://172.16.2.185:8000/cargarzonas/';
    private DistritosUrl: string = 'http://172.16.2.185:8000/cargardistrito/';
    private tablaAes: string = 'http://172.16.2.185:8000/cargaraes/';
    private cantAesUrl: string = 'http://172.16.2.185:8000/cantidadaeus/';
    //aeuslegajos
    private cargarTablaAes: string = 'http://172.16.2.185:8000/aeuslegajos/';

    getCargaDepaInicial(): Observable < Object >{
        return this.http.get(this.DepasUrl).map(this.extractData).catch(this.handleError)
    }

    getDepartamentos(): Observable < Object > {
        return this.http.get(this.DepasUrl).map(this.extractData).catch(this.handleError)
    }

    getProvincias(ccdd: string): Observable < Object > {
        let queryparameters:string = `${ccdd}/`;
        let url: string = this.ProvinciasUrl+queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getDistritos(ccdd: string, ccpp:string): Observable < Object > {
        let queryparameters:string = `${ccdd}/${ccpp}/`;
        let url: string = this.DistritosUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getZonas(ubigeo: string): Observable < Object > {
        let queryparameters:string = `${ubigeo}/`;
        let url: string = this.ZonasUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getTabla(tipo: string="0", ccdd: string="0", ccpp: string="0", ccdi: string="0" ,zona: string="0"): Observable < Object > {
        let queryparameters:string = `${tipo}/${ccdd}/${ccpp}/${ccdi}/${zona}/`;
        let url:string = this.tablaUrlAux + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getTablaAes(ubigeo: string="0", zona: string="0"): Observable < Object > {
        let queryparameters:string = `${ubigeo}/${zona}/`;
        let url:string = this.tablaAes + queryparameters;
        console.log(url);
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getCantAeus(ubigeo: string="0", zona: string="0"): Observable < Object > {
        let queryparameters:string = `${ubigeo}/${zona}/`;
        let url:string = this.cantAesUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getTabAeusLeg(ubigeo: string="0", zona: string="0"): Observable < Object > {
        let queryparameters:string = `${ubigeo}/${zona}/`;
        let url:string = this.cargarTablaAes + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
    getRegistro(url:string=''): Observable < Object > {
        let tablaUrlAux3 = this.tablaUrlAux2 + url;
        if(url!=''){
            return this.http.get(tablaUrlAux3).map(this.extractData)
        }else{
            return this.http.get(this.tablaUrlAux).map(this.extractData)
        }        
    }
}