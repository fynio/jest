# jest 

![Jest](jest.png)

JEST es un framework que nos ayudara a hacer testing de nuestras aplicaciones desarrolladas en javascript
____


## __test__

En esta carpeta incluiremos todos nuestros test el cual debemos llamar de la siguiente manera  NOMBRE_DEL_TESTING.test.js

ejemplo:
  
  sum.test.js



## **describe()**
 
Crea un bloque donde podemos agrupar varias pruebas relacionadas, no es obligatorio pero si es util si queremos tener una mejor organización por grupo.
dentro de el metodo describe podemos asignar un nombre.


## **test()**

Es el metodo que se encarga de ejecutar el test, tiene un alias llamado **it**.

## **expect**

Este metodo se encarga de realizar la evaluacion y va acompañado de unos matchers los cuales se enlistaran más adelante.


___
Ejemplo de uso

```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```


.toBe(value)
.toHaveBeenCalledTimes(number)
.toHaveBeenCalledWith(arg1, arg2, ...)
.toHaveBeenLastCalledWith(arg1, arg2, ...)
.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
.toHaveReturned()
.toHaveReturnedTimes(number)
.toHaveReturnedWith(value)
.toHaveLastReturnedWith(value)
.toHaveNthReturnedWith(nthCall, value)
.toHaveLength(number)
.toHaveProperty(keyPath, value?)
.toBeCloseTo(number, numDigits?)
.toBeDefined()
.toBeFalsy()
.toBeGreaterThan(number | bigint)
.toBeGreaterThanOrEqual(number | bigint)
.toBeLessThan(number | bigint)
.toBeLessThanOrEqual(number | bigint)
.toBeInstanceOf(Class)
.toBeNull()
.toBeTruthy()
.toBeUndefined()
.toBeNaN()
.toContain(item)
.toContainEqual(item)
.toEqual(value)
.toMatch(regexpOrString)
.toMatchObject(object)
.toMatchSnapshot(propertyMatchers?, hint?)
.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
.toStrictEqual(value)
.toThrow(error?)
.toThrowErrorMatchingSnapshot(hint?)
.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)




