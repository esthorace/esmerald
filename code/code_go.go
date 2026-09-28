// Package comment (comment.block / comment.line)
// TODO: Marker de anotación especial
package main

import (
	"context"
	"fmt"
	io "io"  // Alias de importación
	_ "math" // Blank import
	"sync"
	"time"
)

// Directivas del compilador / Pragmas
//go:embed test.txt
//go:noinline

// Constantes globales (Exportadas, no exportadas, iota, tipos explícitos e implícitos)
const (
	ExportedConst   string = "https://example.com/api?v=1\n\x41" // Escapes de string y URLs
	unexportedConst        = 42_000                              // Separador numérico entero
	HexValue               = 0xFF00AA                            // Hexadecimal
	FloatValue             = 3.14159e-2                          // Exponente float
	RuneValue              = '⌘'                                 // Carácter Rune
	RawString              = `String multilínea
sin interpretar \n`
)

const (
	StatePending = iota // Enumeraciones con iota
	StateRunning
	StateFinished
)

// Interfaces con Genéricos y Restricciones (Type Parameters)
type Number interface {
	~int | ~int64 | ~float64
}

type Processor[T any] interface {
	Process(ctx context.Context, input T) (<-chan T, error)
}

// Estructuras (Campos embebidos, etiquetas/tags, exportados vs privados)
type BaseStatus struct {
	ID        uint64 `json:"id" db:"pk"`
	IsActive  bool   `json:"is_active"`
	createdAt time.Time
}

type User[T Number] struct {
	BaseStatus        // Campo embebido
	Name       string `json:"name,omitempty"`
	Score      T
	tags       []string
	metadata   map[string]any
	pointerVal *int
}

// Tipos personalizados y métodos de valor
type Status int

func (s Status) String() string {
	return fmt.Sprintf("Status(%d)", s)
}

// Función genérica con múltiples retornos
func ComputeTotal[T Number](items []T, multiplier T) (total T, err error) {
	if len(items) == 0 {
		return 0, fmt.Errorf("lista vacía")
	}

	for _, val := range items {
		total += val * multiplier
	}
	return total, nil
}

// Método con receptor de puntero (Pointer Receiver)
func (u *User[T]) UpdateScore(newScore T) bool {
	if u == nil || !u.IsActive {
		return false
	}
	u.Score = newScore
	return true
}

// Función principal con control de flujo complejo
func main() {
	// Declaración corta e inferencia de tipos
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var wg sync.WaitGroup
	ch := make(chan string, 10)

	// Goroutine y función anónima
	wg.Add(1)
	go func(c chan<- string) {
		defer wg.Done()
		c <- "Mensaje desde goroutine"
		close(c)
	}(ch)

	// Control de flujo: Select y recepción de canales
	select {
	case msg, ok := <-ch:
		if ok {
			fmt.Printf("Recibido: %s\n", msg)
		}
	case <-ctx.Done():
		fmt.Println("Tiempo agotado:", ctx.Err())
	}

	// Control de flujo: Type Switch
	var genericVal any = "golang"
	switch v := genericVal.(type) {
	case string:
		fmt.Printf("Longitud: %d\n", len(v))
	case int, int64:
		fmt.Println("Entero:", v)
	default:
		fmt.Println("Tipo desconocido")
	}

	// Bucles range, etiquetas y control
LoopLabel:
	for i, v := range []int{1, 2, 3, 4, 5} {
		if v%2 == 0 {
			continue
		}
		if i > 3 {
			break LoopLabel
		} else {
			break

		}

	}

	// Operadores de punteros (& y *)
	val := 100
	ptr := &val
	*ptr = 200

	// Funciones built-in y operaciones con slices
	sliceVal := make([]string, 0, 5)
	sliceVal = append(sliceVal, "go", "theme")

	_ = io.EOF
}
