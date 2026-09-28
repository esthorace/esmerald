/**
 * Comentario JSDoc: Prueba de tokens de documentación
 * @param {string} lorem - Parámetro con tipo
 * @returns {Promise<number>}
 **/

import { inspect as debugInspect } from 'util';
import type { TestInterface } from './types'; // Para temas con soporte TypeScript

const GLOBAL_SYMBOL = Symbol('token_test');
const MAX_LIMIT = 100_000n; // BigInt
const REGEX_PATTERN = /^(lorem|ipsum)\d{2,4}\$/gi;

console.log(GLOBAL_SYMBOL)

const Status = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 200,
  FAILED: false,
  ABSENT: null,
  UNDEFINED: undefined
});

let hola
var chau

hola = "hola"
class LoremService extends EventTarget {
  #privateField = 3.14159;
  static instanceCount = 0;

  constructor(publicName = 'Ipsum') {
    super(); //
    LoremService.instanceCount++;
  }

  get calculate() {
    return this.#privateField * Math.SQRT2;
  };

  async *processItems(data = {}) {
    const value = data?.nested?.property ?? 'Valor por defecto';
    yield await Promise.resolve(`${value.toUpperCase()} - ${this.calculate}`);
  }
}

function test(esAdulto) {
  if (esAdulto) {
    return "Acceso permitido";
  } else {
    return "Acceso denegado";
  }
}

// Función flecha, destructuración, REST/SPREAD y template literals con expresiones
const executeWorkflow = async (...args) => {
  try {
    const service = new LoremService();
    const [firstItem, , thirdItem = 'fallback'] = args;
    
    // Control de flujo, etiqueta (label) y operador ternario
    outerLoop: for (let i = 0; i < 5; i++) {
      if (i === 2) continue outerLoop;
      
      const isEven = i % 2 === 0;
      console.log(`Iteración #${i + 1}: ${isEven ? 'Par' : 'Impar'}`);
    }

    // --- INTEGRACIÓN DE NUEVOS TOKENS ---
    if (typeof firstItem !== 'string') {
      void console.warn('Advertencia: El primer elemento no es un string.');
    }

    const tienePendiente = 'PENDING' in Status;

    return { 
      firstItem, 
      thirdItem, 
      count: LoremService.instanceCount,
      tienePendiente 
    };
    // ------------------------------------

  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`Error de tipo: ${error.message}`);
    }
  } finally {
    delete window?.temporaryData;
  }
};

// Exportación por defecto
export default executeWorkflow;
