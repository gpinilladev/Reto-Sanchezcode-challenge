// Variables
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ10 = document.getElementById("btnJ10");
let letrasTemp = "";
let numerosTemp = "";

// Funciones
const logicaA1 = () => {
    console.log('letrasTemp: ', letrasTemp);
    console.log('numerosTemp: ', numerosTemp);

    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        letras.innerHTML = "A";
        letrasTemp = "A";
        console.log('letrasTemp: ', letrasTemp);
    } else {
        if (letrasTemp === "ABCDEFGHIJ") {
            if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                numeros.innerHTML = "1";
                numerosTemp = "1";
                console.log('numerosTemp: ', numerosTemp);
            } else {
                if (numerosTemp === "12345678910") {
                    alert("Letras y números completos");
                } else {
                    alert("Faltan números");
                }
            }
        } else {
            alert("Faltan letras");
        }
    }

    // letras.innerHTML = "A";
}
const logicaB2 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A");
    } else {
        if (letrasTemp === 'A') {
            letras.innerHTML = letrasTemp + "B";
            letrasTemp = letrasTemp + "B";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta el numero 1");
                } else {

                    if (numerosTemp === '1') {
                        numeros.innerHTML = numerosTemp + "2";
                        numerosTemp = numerosTemp + "2";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaC3 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A y B");
    } else {
        if (letrasTemp === 'AB') {
            letras.innerHTML = letrasTemp + "C";
            letrasTemp = letrasTemp + "C";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1 y 2");
                } else {

                    if (numerosTemp === '12') {
                        numeros.innerHTML = numerosTemp + "3";
                        numerosTemp = numerosTemp + "3";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaD4 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, y C");
    } else {
        if (letrasTemp === 'ABC') {
            letras.innerHTML = letrasTemp + "D";
            letrasTemp = letrasTemp + "D";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2 y 3");
                } else {

                    if (numerosTemp === '123') {
                        numeros.innerHTML = numerosTemp + "4";
                        numerosTemp = numerosTemp + "4";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaE5 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C y D");
    } else {
        if (letrasTemp === 'ABCD') {
            letras.innerHTML = letrasTemp + "E";
            letrasTemp = letrasTemp + "E";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3 y 4");
                } else {

                    if (numerosTemp === '1234') {
                        numeros.innerHTML = numerosTemp + "5";
                        numerosTemp = numerosTemp + "5";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaF6 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C, D y E");
    } else {
        if (letrasTemp === 'ABCDE') {
            letras.innerHTML = letrasTemp + "F";
            letrasTemp = letrasTemp + "F";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3, 4 y 5");
                } else {

                    if (numerosTemp === '12345') {
                        numeros.innerHTML = numerosTemp + "6";
                        numerosTemp = numerosTemp + "6";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaG7 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C, D ,E y F");
    } else {
        if (letrasTemp === 'ABCDEF') {
            letras.innerHTML = letrasTemp + "G";
            letrasTemp = letrasTemp + "G";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3, 4, 5 y 6");
                } else {

                    if (numerosTemp === '123456') {
                        numeros.innerHTML = numerosTemp + "7";
                        numerosTemp = numerosTemp + "7";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaH8 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C, D ,E, F y G");
    } else {
        if (letrasTemp === 'ABCDEFG') {
            letras.innerHTML = letrasTemp + "H";
            letrasTemp = letrasTemp + "H";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3, 4, 5, 6 y 7");
                } else {

                    if (numerosTemp === '1234567') {
                        numeros.innerHTML = numerosTemp + "8";
                        numerosTemp = numerosTemp + "8";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaI9 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C, D ,E, F, G y H");
    } else {
        if (letrasTemp === 'ABCDEFGH') {
            letras.innerHTML = letrasTemp + "I";
            letrasTemp = letrasTemp + "I";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3, 4, 5, 6, 7 y 8");
                } else {

                    if (numerosTemp === '12345678') {
                        numeros.innerHTML = numerosTemp + "9";
                        numerosTemp = numerosTemp + "9";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}
const logicaJ10 = () => {
    if (letrasTemp === '' || letrasTemp === null || letrasTemp === 'undefined') {
        alert("Falta la letra A, B, C, D ,E, F, G, H y I");
    } else {
        if (letrasTemp === 'ABCDEFGHI') {
            letras.innerHTML = letrasTemp + "J";
            letrasTemp = letrasTemp + "J";
            console.log('letrasTemp: ', letrasTemp);
        } else {

            if (letrasTemp === 'ABCDEFGHIJ') {
                if (numerosTemp === '' || numerosTemp === null || numerosTemp === 'undefined') {
                    alert("Falta los numeros 1, 2, 3, 4, 5, 6, 7, 8 y 9");
                } else {

                    if (numerosTemp === '123456789') {
                        numeros.innerHTML = numerosTemp + "10";
                        numerosTemp = numerosTemp + "10";
                        console.log('numerosTemp: ', numerosTemp);
                    } else {
                        if (numerosTemp === '12345678910') {
                            alert("Numeros y letras completos");
                        } else {
                            alert("Faltan numeros");
                        }
                    }

                }
            } else {
                alert("Faltan letras");
            }
        }
    }
}

// Onclicks
btnA1.onclick = () => {
    logicaA1();
};
btnB2.onclick = () => {
    logicaB2();
};
btnC3.onclick = () => {
    logicaC3();
};
btnD4.onclick = () => {
    logicaD4();
};
btnE5.onclick = () => {
    logicaE5();
};
btnF6.onclick = () => {
    logicaF6();
};
btnG7.onclick = () => {
    logicaG7();
};
btnH8.onclick = () => {
    logicaH8();
};
btnI9.onclick = () => {
    logicaI9();
};
btnJ10.onclick = () => {
    logicaJ10();
};