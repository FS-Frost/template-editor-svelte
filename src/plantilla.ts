export interface Plantilla {
    DatosBasicos: DatosBasicos;
    DatosDescarga: DatosDescarga;
    DatosStaff: DatosStaff;
    DatosTecnicos: DatosTecnicos;
}

export interface DatosBasicos {
    Proyecto: string;
    UrlImagen: string;
    Sinopsis: string;
}

export interface DatosDescarga {
    UrlBotonMp4: string;
    UrlArchivosMp4: string;
    UrlBotonAvi: string;
    UrlArchivosAvi: string;
}

export interface Integrante {
    Cargo: string;
    Nombre: string;
}

export interface DatosStaff {
    Integrantes: Integrante[];
}

export enum Categoria {
    Serie = "Serie",
    SerieBluray = "Serie Blu-ray",
    Ova = "OVA",
    Pelicula = "Película",
}

export interface DatosTecnicos {
    NombreJapones: string;
    NombreJaponesRomaji: string;
    NombreAlternativo: string;
    NombreAlternativoTraduccion: string;
    Categoria: Categoria;
    Genero: string;
    Episodios: string;
    Estudio: string;
    FormatosArchivos: string;
    TamanoArchivos: string;
    GraficoAvance: string;
}

export function newPlantilla(): Plantilla {
    const cargos = ["Traducción", "Corrección", "Carteles", "Karaokes", "Compresión MP4", "Compresión AVI"];

    const plantilla: Plantilla = {
        DatosBasicos: {
            Proyecto: "",
            UrlImagen: "",
            Sinopsis: "No disponible",
        },
        DatosDescarga: {
            UrlBotonMp4: "https://3.bp.blogspot.com/-LNecaZS2Xeg/U7y4vXn2RTI/AAAAAAAABNU/TWQ7EQiS3eY/s1600/mega.png",
            UrlArchivosMp4: "",
            UrlBotonAvi: "https://4.bp.blogspot.com/-gNc_vnGu3eY/U7y4zzFemvI/AAAAAAAABNc/CKv-PeeI3Sk/s1600/megaavi.png",
            UrlArchivosAvi: "",
        },
        DatosStaff: {
            Integrantes: [
                ...cargos.map(cargo => {
                    const integrante: Integrante = {
                        Cargo: cargo,
                        Nombre: "",
                    };
                    return integrante;
                }),
            ],
        },
        DatosTecnicos: {
            NombreJapones: "",
            NombreJaponesRomaji: "",
            NombreAlternativo: "",
            NombreAlternativoTraduccion: "",
            Categoria: Categoria.Serie,
            Genero: "",
            Episodios: "1",
            Estudio: "",
            FormatosArchivos: "[.AVI 704×396 xVID] [.MP4 1280x720 x264]",
            TamanoArchivos: "[.AVI 180 MB] [.MP4 Peso variable]",
            GraficoAvance: "",
        },
    };
    return plantilla;
}