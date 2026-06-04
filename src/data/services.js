/** @deprecated Old slugs → redirect to new URLs */
export const LEGACY_SLUG_REDIRECTS = {
  'gtc-lab': 'engineering-laboratory',
  'lab-test-tmt-bar': 'tmt-bar-tendon-wire',
  'lab-test-bituminous': 'bituminous-material',
  'lab-test-aggregate-concrete': 'aggregate-cement-concrete',
  'supply-lab-equipment': 'laboratory-equipments',
  'supply-admixture-chemical': 'admixture-chemical',
  'supply-survey-equipment': 'survey-equipments',
  'supply-safety-ppe': 'safety-equipments',
}

export const services = [
  {
    title: 'Engineering Laboratory (Soil and Construction Material)',
    slug: 'engineering-laboratory',
    folder: 'services/lab',
    desc: 'Comprehensive soil and construction material testing following NS/ASTM standards.',
    content: {
      checklists: [
        {
          title: 'Soil Testing',
          items: [
            'Sieve Analysis (Gradation)',
            'Hydrometer Analysis',
            'Moisture Content',
            'Specific Gravity',
            'Atterberg Limits (Liquid & Plastic)',
            'Linear Shrinkage',
            'Field Density',
            'Consolidation',
            'Direct Shear',
            'Compaction (Standard & Modified)',
            'California Bearing Ratio (C.B.R)',
            'Standard Penetration Test (S.P.T)',
            'In-Situ Penetration Test',
          ],
        },
      ],
      projects: [
        {
          title: 'Major Projects on Material Testing',
          items: [
            'Ministry of Water Resource & Irrigation',
            'Nepal Electricity Authority',
            'National Reconstruction Authority',
            'Ministry of Urban Development',
            'SASEC Road Improvement Project',
            'Gawar Construction Ltd',
            'Ministry of Physical Infrastructure Development',
            'Northwest Civil Aviation Airport Construction Group (Gautam Buddha Airport Project)',
          ],
        },
      ],
    },
  },
  {
    title: 'Soil Investigation & Drilling',
    slug: 'soil-investigation-drilling',
    folder: 'services/soil',
    desc: 'Borehole drilling, SPT testing, and detailed geotechnical investigation reports.',
    content: {
      projects: [
        {
          title: 'Soil Testing Projects',
          items: [
            'Satellite City Project by Butwal Sub-Metropolitan City',
            'Patanjali Ayurveda Pvt. Ltd.',
            'Shakyamuni Buddha Statue Project, Tansen Municipality',
            'Kohinoor Plastic Industries',
            'Fountain Fun Hotel Pvt. Ltd',
            'Lumbini Agro Industries Pvt.',
            'Bhim Hospital, Bhairahawa',
            'Durgalaxmi Steel Industries Pvt. Ltd.',
            "Municipalities & Rural Municipality's Projects",
            'More than 25 Community/Govt. Schools in Province-5',
          ],
        },
      ],
    },
  },
  {
    title: 'Lab Test on TMT Bar & Tendon Wire',
    slug: 'tmt-bar-tendon-wire',
    folder: 'services/tmt',
    desc: 'Tensile strength, yield strength, and elongation tests on reinforcement steel.',
    content: {
      textSections: [
        {
          title: 'Bend & Re-Bend Test of TMT Bar',
          description:
            'Testing of TMT bars for bend and re-bend characteristics to verify ductility and structural performance per standards.',
        },
        {
          title: 'Tensile Strength of TMT Bar',
          description:
            'Tensile strength testing of TMT reinforcement bars to verify yield strength, ultimate tensile strength, and elongation.',
        },
        {
          title: 'Tensile Strength Test of Tendon Wire',
          description:
            'Tensile strength testing of prestressing tendon wire used in bridge and post-tensioned concrete works.',
        },
      ],
    },
  },
  {
    title: 'Lab Test on Bituminous Material',
    slug: 'bituminous-material',
    folder: 'services/bitumen',
    desc: 'Penetration, ductility, softening point, and Marshall stability tests for road materials.',
    content: {
      checklists: [
        {
          title: 'Bituminous Testing',
          items: [
            'Penetration Test',
            'Ductility Test',
            'Flash & Fire Point',
            'Absolute/Dynamic Viscosity at 60°C',
            'Kinematic Viscosity (135°C)',
            'Specific Gravity',
            'Solubility Test',
            'Softening Point',
            'Loss on Heating of Asphalt',
            'Water Content',
            'Residue on Sieving of Emulsion',
            'Water Absorption',
            'Determination of Bitumen Content (Big Bowl)',
            'Determination of Bitumen Content (Small Bowl)',
            'Binder Content of Emulsion',
            'Stripping Test',
            'Asphalt Mix Design',
            'Field Density Test (Core Cutting)',
          ],
        },
      ],
    },
  },
  {
    title: 'Lab Test on Aggregate, Cement & Concrete',
    slug: 'aggregate-cement-concrete',
    folder: 'services/concrete',
    desc: 'Sieve analysis, compressive strength, slump test, and durability testing.',
    content: {
      checklists: [
        {
          title: 'Cement Testing',
          items: [
            'Compressive Strength',
            'Setting Time of Cement',
            'Soundness Test of Cement',
            'Fineness Test of Cement',
          ],
        },
        {
          title: 'Concrete Testing',
          items: [
            'Concrete Mix Design',
            'Compressive Strength',
            'Slump Test',
            'Non-Destructive Test (Schmidt Hammer Test)',
            'Core Test',
          ],
        },
        {
          title: 'Aggregate Testing',
          items: [
            'Sieve Analysis (Gradation)',
            'Specific Gravity',
            'Water Absorption',
            'Los Angeles Abrasion',
            'Aggregate Crushing Value (ACV)',
            'Aggregate Impact Value (AIV)',
            'Soundness (MgSO4 or Na2SO4)',
            'Flakiness Index',
            'Elongation Index',
            'Sand Equivalent',
            'Bulk Density, Voids & Bulking',
          ],
        },
      ],
    },
  },
  {
    title: 'Supply & Services for Engineering Laboratory Equipments',
    slug: 'laboratory-equipments',
    folder: 'services/lab-equipment',
    desc: 'Supply, calibration, and servicing of engineering laboratory instruments.',
    content: {
      featureCards: {
        title: 'Scope of Services',
        items: [
          'Engineering Equipments and Construction Materials',
          'Engineering Laboratory Equipments',
          'Prestressing Service',
        ],
      },
      equipment: {
        title: 'Equipment List',
        items: [
          'Concrete Compression Machine',
          'Cube Mould',
          'In-Situ Vane Shear Test Apparatus',
          'Direct Shear Apparatus',
          'Vernier Caliper',
          'Brass Sieves',
        ],
      },
    },
  },
  {
    title: 'Supply & Service for Admixture and Chemical Used in Construction',
    slug: 'admixture-chemical',
    folder: 'services/chemical',
    desc: 'Concrete admixtures, curing compounds, and construction chemicals.',
    content: {
      description:
        'Sigma Trades & Suppliers provides supply of high-quality admixtures and construction chemicals used in concrete, grouting, waterproofing, and other construction applications. Our team provides technical support and guidance on product selection and usage.',
      scope:
        'Supply of admixtures and chemicals used in construction works including concrete admixtures, microsilica, MYK chemicals, waterproofing agents, and other construction chemicals.',
    },
  },
  {
    title: 'Supply & Services for Engineering Survey Equipments',
    slug: 'survey-equipments',
    folder: 'services/survey',
    desc: 'Total stations, levels, theodolites, GPS and other survey instruments.',
    content: {
      featureCards: {
        title: 'Scope of Services',
        items: ['Quality Survey Equipments', 'GPS Survey Equipments'],
      },
      equipment: {
        title: 'Equipment List',
        items: [
          'Total Station',
          'Auto Level',
          'Tripod',
          'Laser Distance Meter',
          'Prism',
          'Measuring Tape',
          'Abney Level',
          'GPS',
        ],
      },
    },
  },
  {
    title: 'Supply & Services for Safety Equipments (PPE & many more)',
    slug: 'safety-equipments',
    folder: 'services/ppe',
    desc: 'Hard hats, harnesses, gloves, goggles, boots and complete PPE kits.',
    content: {
      featureCards: {
        title: 'Scope of Services',
        items: ['Safety Equipments (PPE)', 'Prestressing Service'],
      },
      description:
        'Sigma Trades & Suppliers supplies a complete range of personal protective equipment (PPE) and safety gear for construction site safety compliance, including helmets, gloves, harnesses, safety boots, high-visibility vests, goggles, and more.',
    },
  },
  {
    title: 'Design & Pre-Consulting Services — All Types of Engineering Services',
    shortTitle: 'Design & Pre-Consulting Services',
    slug: 'design-consulting',
    folder: 'services/design',
    desc: 'Structural design, pre-feasibility studies, and technical consulting for projects.',
    content: {
      visionMission: {
        vision:
          'Innovation and creativity is our key Mantra. Our Vision is to be the most trusted and respected professional engineering consulting services firm recognized by our clients for innovative design. Our aim is to deliver superior design, cost-effective, economical construction and integrated engineering with latest design construction standards across our extensive project portfolio, thus building robust client loyalty along the way.',
        mission:
          'Our goal is to be a world-class engineering services firm that designs, develops and executes in practical life.',
        objectives: [
          "Contribute towards country's development by providing consulting services for Buildings, Roads, Irrigation, Water Supply, and Technical Trainings",
          'Provide expertise on Rural and Environment Friendly Road Technology',
          'Infrastructure Analysis, feasibility studies, designs and conduct trainings in infrastructure and appropriate technology',
          'Socio-Economic and human resource development and management studies (pre and post project evaluation)',
          'Studies and expertise for planning, implementation, monitoring and evaluation of renewable energy systems and environmental preservation for rural development',
        ],
      },
      projects: [
        {
          title: 'Our Works / Completed Projects',
          items: [
            'Initial Environmental Examination (IEE) of Danav River',
            'Detailed Topographical Survey, Soil Investigation and DPR of Industrial Building of Patanjali Ayurved at Sunwal Municipality',
            'Detailed Project Report (DPR) of Ward Building at Suddhodhan Municipality',
            'Detailed Master Plan Preparation and DPR of Hospital Building',
            'Detailed Master Plan, Seismic Vulnerability Assessment, Detail Design for Restoration/Retrofitting of Argha and Mathura Durbar',
            'Detailed Master Plan Preparation and DPR of Panini Multiple Campus',
            'Detailed Master Plan Preparation and DPR of Heritage Tower at Simara Municipality',
            'Detailed Master Plan Preparation and DPR of Heritage Resort at Simara Municipality',
            'Detailed Project Report (DPR) of Shiva Mandir at Devdaha Municipality',
          ],
        },
      ],
    },
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

export function resolveServiceSlug(slug) {
  return LEGACY_SLUG_REDIRECTS[slug] || slug
}
