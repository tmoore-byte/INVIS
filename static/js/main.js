function generateCompanyFields() {
    const numCompanies = document.getElementById("companies").value;

    const companyDetailsContainer = document.getElementById("company-details");
    companyDetailsContainer.innerHTML = '';  // Clear previous data if any

    for (let i = 1; i <= numCompanies; i++) {
        const companyDiv = document.createElement('div');
        
        const companyNameLabel = document.createElement('label');
        companyNameLabel.textContent = `Company ${i} Name: `;
        
        const companyNameInput = document.createElement('input');
        companyNameInput.type = 'text';
        companyNameInput.id = `company-${i}-name`;

        const attachLabel = document.createElement('label');
        attachLabel.textContent = `Attach Point: `;

        const attachInput = document.createElement('input');
        attachInput.type = 'number';
        attachInput.id = `company-${i}-attach`;

        const stretchLabel = document.createElement('label');
        stretchLabel.textContent = `Stretch Point: `;

        const stretchInput = document.createElement('input');
        stretchInput.type = 'number';
        stretchInput.id = `company-${i}-stretch`;

        companyDiv.appendChild(companyNameLabel);
        companyDiv.appendChild(companyNameInput);
        companyDiv.appendChild(attachLabel);
        companyDiv.appendChild(attachInput);
        companyDiv.appendChild(stretchLabel);
        companyDiv.appendChild(stretchInput);

        companyDetailsContainer.appendChild(companyDiv);
    }

    const createButton = document.createElement('button');
    createButton.textContent = "Update Chart";
    createButton.onclick = updateChart;
    companyDetailsContainer.appendChild(createButton);
}

function updateChart() {
    const numCompanies = document.getElementById("companies").value;
    const companyBarsContainer = document.getElementById("companyBarsContainer");
    companyBarsContainer.innerHTML = '';  // Clear previous chart

    let companies = [];

    // Gather company data
    for (let i = 1; i <= numCompanies; i++) {
        let companyName = document.getElementById(`company-${i}-name`).value;
        let attachPoint = parseInt(document.getElementById(`company-${i}-attach`).value, 10);
        let stretchPoint = parseInt(document.getElementById(`company-${i}-stretch`).value, 10);

        companies.push({
            name: companyName,
            attach: attachPoint,
            stretch: stretchPoint
        });
    }
    console.log(companies);

    let maxStretch = Math.max(...companies.map(company => company.stretch));
    const maxLimit = Math.ceil(maxStretch / 10) * 10;  // Rounding up to the nearest 10 for scale

    // Clear previous layer lines
    const layerLinesContainer = document.getElementById("layerLinesContainer");
    layerLinesContainer.innerHTML = '';

    // Visualizing layers
    const numLayers = document.getElementById("layers").value;
    const chartHeight = 300; // in pixels

    for (let i = 1; i <= numLayers; i++) {
        let layerLimit = document.getElementById(`layer-${i}-limit`).value;
        let layerLine = document.createElement('div');
        layerLine.classList.add('layer-line');

        let bottomPosition = (layerLimit / maxLimit) * chartHeight;
        layerLine.style.bottom = `${bottomPosition}px`;

        // Adding a label to the layer line
        let label = document.createElement('span');
        label.classList.add('layer-label');
        label.textContent = `${layerLimit}M`;
        layerLine.appendChild(label);

        layerLinesContainer.appendChild(layerLine);
    }

    let cumulativeHeight = 0;  // To track the total height of bars added

    // Visualize company data
    companies.forEach(company => {
        let companyBar = document.createElement('div');
        companyBar.classList.add('company-bar');

        let heightPercentage = ((company.stretch - company.attach) / maxLimit) * chartHeight;
        let bottomPosition = cumulativeHeight;

        companyBar.style.height = `${heightPercentage}px`;
        companyBar.style.bottom = `${bottomPosition}px`;

        cumulativeHeight += heightPercentage;  // Update the total height 

        companyBar.innerHTML = `<strong>${company.name}</strong><br>${company.stretch}M - ${company.attach}M`;

        companyBarsContainer.appendChild(companyBar);  // Append to companyBarsContainer instead of chartContainer to keep the layers and bars separate
    });
}



//layer function 
function updateLayers() {
    const numLayers = document.getElementById("layers").value;
    const layerSlidersDiv = document.getElementById("layerSliders");
    layerSlidersDiv.innerHTML = '';  // Clear previous sliders
    
    for (let i = 1; i <= numLayers; i++) {
        let sliderWrapper = document.createElement('div');
        sliderWrapper.innerHTML = `
            <label for="layer-${i}-limit">Layer ${i} Limit:</label>
            <input type="range" id="layer-${i}-limit" min="0" max="100" value="${i * 10}" oninput="updateLayerLabel(${i})">
            <span id="layer-${i}-value">${i * 10}M</span>
        `;
        layerSlidersDiv.appendChild(sliderWrapper);
    }
}

function updateLayerLabel(layerNum) {
    const sliderValue = document.getElementById(`layer-${layerNum}-limit`).value;
    const labelSpan = document.getElementById(`layer-${layerNum}-value`);
    labelSpan.textContent = `${sliderValue}M`;

    updateChart();
}

