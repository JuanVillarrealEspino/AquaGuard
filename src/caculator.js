function calculateWaterFootprint() {
    // Obtén los valores de cada campo del formulario
    const showerTime = parseFloat(document.getElementById('showerTime').value) || 0;
    const washingDishes = parseFloat(document.getElementById('washingDishes').value) || 0;
    const laundryLoads = parseFloat(document.getElementById('laundryLoads').value) || 0;
    const waterConsumption = parseFloat(document.getElementById('waterConsumption').value) || 0;
    const gardenWatering = parseFloat(document.getElementById('gardenWatering').value) || 0;
    const otherUsage = parseFloat(document.getElementById('otherUsage').value) || 0;

    // Cálculos aproximados para la huella hídrica en litros
    const showerWater = showerTime * 12; // 12 litros por minuto en la ducha
    const dishesWater = washingDishes * 15 / 7; // 15 litros por cada lavado de platos
    const laundryWater = laundryLoads * 60 / 7; // 60 litros por carga de ropa
    const gardenWater = gardenWatering * 10 / 7; // 10 litros por minuto de riego
    const dailyWaterUsage = waterConsumption + otherUsage; // Consumo directo de agua potable y otros usos

    // Suma de todas las actividades
    const totalWaterFootprint = showerWater + dishesWater + laundryWater + gardenWater + dailyWaterUsage;

    // Promedio de consumo de agua por persona (puedes ajustar este valor según las fuentes)
    const averageWaterFootprint = 150; // Litros por día

    // Mostrar resultado
    document.getElementById('waterFootprintResult').innerText = totalWaterFootprint.toFixed(2);
    document.getElementById('result').classList.remove('d-none');

    // Comparar con el promedio
    let comparisonResult = '';
    if (totalWaterFootprint > averageWaterFootprint) {
      comparisonResult = 'Estás consumiendo más agua que el promedio. Intenta reducir tu consumo.';
    } else if (totalWaterFootprint < averageWaterFootprint) {
      comparisonResult = 'Estás consumiendo menos agua que el promedio. ¡Buen trabajo!';
    } else {
      comparisonResult = 'Estás en el promedio de consumo de agua.';
    }

    // Mostrar comparación
    document.getElementById('comparisonResult').innerText = comparisonResult;
  }