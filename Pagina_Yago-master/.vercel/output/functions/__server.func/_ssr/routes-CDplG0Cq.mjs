import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-CDplG0Cq.js
var import_jsx_runtime = require_jsx_runtime();
var yago_mirror_selfie_default = "/assets/yago-mirror-selfie-CVzKA-9_.png";
var logo_default = "/assets/logo-Bkib-ciz.png";
var yago_back_flex_default = "/assets/yago-back-flex-B5CmqP8q.png";
var yago_gym_pose_default = "/assets/yago-gym-pose-CGKzc2oV.png";
var yago_front_flex_default = "/assets/yago-front-flex-Dm6_1l2x.png";
var yago_room_pose_default = "/assets/yago-room-pose-DdhKw3_M.png";
var achievements = [
	{
		n: "1:1",
		label: "Asesoría Individual",
		detail: "Acompañamiento cercano y personalizado semana a semana para guiarte y asegurar tu progreso de verdad."
	},
	{
		n: "4",
		label: "Años de experiencia entrenando\xA0",
		detail: "Especializado en entrenamiento online, fuerza y composición corporal."
	},
	{
		n: "98%",
		label: "Adherencia al método",
		detail: "Programas diseñados a medida, sostenibles y con seguimiento semanal."
	}
];
var testimonialsRow1 = [{
	name: "Lorenzo",
	role: "1/04/2026",
	quote: "Desde que te tengo como entrenador los entrenamientos no se comparan a los que me hacían antes en mi gimnasio. Es una locura lo que he avanzado en tan poco tiempo."
}, {
	name: "Enrique",
	role: "25/06/2025",
	quote: "Ya llevo casi un año trabajando con Yago y ha sido lo mejor que he podido hacer. Mis entrenamientos cambiaron por completo y el físico se vio reflejado. A nivel nutricional me ha ayudado muchísimo para saber qué comer y cómo comerlo."
}];
var testimonialsRow2 = [{
	name: "Carlos",
	role: "12/05/2026",
	quote: "Ha sabido adaptar perfectamente la rutina a mi horario de trabajo a turnos. Por fin he conseguido ser constante."
}, {
	name: "Adrián",
	role: "03/04/2026",
	quote: "Buscaba ganar masa muscular y fuerza. Yago me organizó los entrenos y me guio paso a paso. En pocos meses he mejorado mis marcas y me veo mucho más fuerte."
}];
var plans = [
	{
		name: "Mensual",
		price: 30,
		period: "/ mes",
		description: "Ideal para probar el método y empezar a construir tus hábitos de forma guiada.",
		features: [
			"Asesoría 1:1 online",
			"Rutina personalizada",
			"Plan de nutrición adaptado",
			"Soporte semanal"
		],
		href: "https://wa.me/34644156545?text=Hola%20Yago,%20estoy%20interesado%20en%20el%20Plan%20Mensual.",
		featured: false,
		buttonClassName: "bg-foreground text-background hover:bg-primary"
	},
	{
		name: "Trimestral",
		price: 85,
		period: "/ trimestre",
		description: "Para quienes buscan un compromiso a medio plazo y empezar a ver cambios físicos reales.",
		features: [
			"Todo lo del plan mensual",
			"Ajustes según progreso",
			"Mayor adherencia y constancia",
			"Ahorro del 6% mensual"
		],
		href: "https://wa.me/34644156545?text=Hola%20Yago,%20estoy%20interesado%20en%20el%20Plan%20Trimestral.",
		featured: true,
		badge: "Recomendado",
		buttonClassName: "bg-clay text-white hover:opacity-90"
	},
	{
		name: "Anual",
		price: 330,
		period: "/ año",
		description: "Transformación radical. Un año completo enfocado en cambiar tu estilo de vida por completo.",
		features: [
			"Acompañamiento por 12 meses",
			"Renovación trimestral de objetivos",
			"Soporte directo y prioritario",
			"Ahorro del 8% mensual"
		],
		href: "https://wa.me/34644156545?text=Hola%20Yago,%20estoy%20interesado%20en%20el%20Plan%20Anual.",
		featured: false,
		buttonClassName: "bg-foreground text-background hover:bg-primary"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-grain min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2.5 text-display text-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Yago Logo",
								className: "h-9 w-auto object-contain rounded-full border border-border/40"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Yago", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-clay",
								children: "."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "hidden md:flex items-center gap-10 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#sobre",
									className: "hover:text-foreground transition",
									children: "Sobre mí"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#logros",
									className: "hover:text-foreground transition",
									children: "Logros"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#tarifas",
									className: "hover:text-foreground transition",
									children: "Tarifas"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#testimonios",
									className: "hover:text-foreground transition",
									children: "Testimonios"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "hover:text-foreground transition",
									children: "Contacto"
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs tracking-widest uppercase text-primary-foreground hover:opacity-90 transition",
							children: "Empezar"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "top",
				className: "relative pt-36 pb-24 md:pt-44 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 animate-rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-eyebrow mb-6",
								children: "Entrenador Personal · Online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-display text-[clamp(3rem,9vw,8.5rem)]",
								children: [
									"Consigue tu",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-clay",
										children: "mejor versión."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed",
								children: "Acompaño a personas como tú a conseguir un cambio físico real y, sobre todo, a crear hábitos saludables que puedan mantener en el tiempo. Un plan de entrenamiento y nutrición totalmente personalizado para ayudarte a alcanzar tus objetivos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contacto",
										className: "inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm tracking-wide text-background hover:bg-primary transition",
										children: "Quiero empezar →"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#tarifas",
										className: "inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm tracking-wide hover:bg-card transition",
										children: "Ver tarifas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#testimonios",
										className: "inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm tracking-wide hover:bg-card transition",
										children: "Ver testimonios"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 md:gap-4",
							children: [
								yago_front_flex_default,
								yago_gym_pose_default,
								yago_back_flex_default,
								yago_room_pose_default
							].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[3/4] overflow-hidden rounded-sm shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: `Yago foto ${i + 1}`,
									loading: i === 0 ? "eager" : "lazy",
									className: "h-full w-full object-cover"
								})
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -left-6 bg-background border border-border px-5 py-4 shadow-elegant rounded-sm hidden md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-eyebrow",
								children: "Disponible"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-1",
								children: "Plazas abiertas · Junio"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sobre",
				className: "py-28 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5 md:col-start-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden rounded-sm shadow-elegant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: yago_mirror_selfie_default,
								alt: "Yago posando en el espejo",
								loading: "lazy",
								width: 1080,
								height: 1350,
								className: "h-full w-full object-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-6 md:col-start-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-eyebrow mb-5",
								children: "Sobre mí"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-display text-5xl md:text-6xl",
								children: "Entrenamiento con propositos y\xA0\xA0 hábitos para toda la vida."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 text-lg text-muted-foreground leading-relaxed space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Soy Yago, tengo 19 años y llevo varios años entrenando con un objetivo claro: mejorar mi físico, mi salud y mis hábitos. Durante este tiempo he aprendido que los resultados no dependen de hacer dietas extremas o entrenamientos imposibles, sino de encontrar un método que puedas mantener." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Por eso he creado esta web: para ayudar a personas como tú a alcanzar sus objetivos de una forma realista, saludable y sostenible. Lo que más me motiva es acompañar a otras personas en su proceso y ver cómo consiguen cambios que realmente perduran." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl text-foreground font-semibold pt-4",
										children: "Mi método"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mi forma de trabajar se basa en la personalización. Tanto el entrenamiento como la alimentación se adaptan a ti, a tus objetivos y a tu estilo de vida." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No creo en los planes genéricos ni en las restricciones innecesarias. Mi objetivo es que disfrutes del proceso, consigas resultados y puedas mantenerlos en el tiempo sin sentir que tu rutina o tu alimentación se convierten en una obligación." })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "logros",
				className: "py-28 md:py-36 bg-card/40 border-y border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow mb-5",
							children: "Logros"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-5xl md:text-7xl max-w-2xl",
							children: ["Resultados que ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-clay",
								children: "hablan solos."
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted-foreground",
							children: "Cifras de un trabajo constante. Detrás de cada número hay una historia personal de esfuerzo y disciplina."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-px bg-border",
						children: achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-background p-10 md:p-12 flex flex-col gap-6 hover:bg-card transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-display text-7xl md:text-8xl text-clay",
									children: a.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl",
									children: a.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: a.detail
								})
							]
						}, a.label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "tarifas",
				className: "py-28 md:py-36 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow mb-5",
							children: "Tarifas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-5xl md:text-7xl max-w-2xl",
							children: ["Planes adaptados a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-clay",
								children: "tus objetivos."
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted-foreground",
							children: "Elige el plan que mejor se adapte a tu ritmo. Asesoría 100% personalizada para garantizar tu cambio."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-8",
						children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: ["p-10 flex flex-col justify-between rounded-sm hover:border-clay/50 transition duration-300 relative overflow-hidden group", plan.featured ? "border border-clay bg-card/70 hover:border-clay ring-1 ring-clay/20 shadow-elegant" : "border border-border bg-card/40 hover:border-clay/50"].join(" "),
							children: [
								plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 bg-clay text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold rounded-bl-sm",
									children: plan.badge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: ["text-xs uppercase tracking-widest font-semibold", plan.featured ? "text-clay font-bold" : "text-muted-foreground"].join(" "),
										children: plan.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-baseline gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-display text-6xl text-clay",
											children: [plan.price, "€"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: plan.period
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-sm text-muted-foreground leading-relaxed",
										children: plan.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-3.5 text-sm",
										children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-clay",
													children: "✓"
												}),
												" ",
												feature
											]
										}, feature))
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: plan.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: ["mt-10 block text-center rounded-full py-3 text-sm font-medium tracking-wide transition", plan.buttonClassName].join(" "),
									children: "Contratar Plan"
								})
							]
						}, plan.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "testimonios",
				className: "py-28 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-12 gap-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4 md:sticky md:top-32",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-eyebrow mb-5",
									children: "Testimonios"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-display text-5xl md:text-6xl",
									children: [
										"Lo que dicen ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "italic text-clay",
											children: "quienes ya entrenan"
										}),
										" conmigo."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 aspect-[4/5] overflow-hidden rounded-sm shadow-elegant hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: yago_back_flex_default,
										alt: "Espalda de Yago",
										loading: "lazy",
										width: 1e3,
										height: 1200,
										className: "h-full w-full object-cover"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-7 md:col-start-6 space-y-12",
							children: testimonialsRow1.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "border-t border-border pt-10 first:border-t-0 first:pt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-display text-6xl text-clay leading-none",
										children: "“"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
										className: "mt-2 text-2xl md:text-3xl text-display leading-snug",
										children: t.quote
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "mt-8 flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm",
												children: t.name[0]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground tracking-wider uppercase",
												children: t.role
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-auto text-xs text-muted-foreground",
												children: [
													"0",
													i + 1,
													" / 04"
												]
											})
										]
									})
								]
							}, t.name))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-12 gap-12 items-start mt-32 md:mt-48",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-7 space-y-12",
							children: testimonialsRow2.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "border-t border-border pt-10 first:border-t-0 first:pt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-display text-6xl text-clay leading-none",
										children: "“"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
										className: "mt-2 text-2xl md:text-3xl text-display leading-snug",
										children: t.quote
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "mt-8 flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm",
												children: t.name[0]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground tracking-wider uppercase",
												children: t.role
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-auto text-xs text-muted-foreground",
												children: [
													"0",
													i + 3,
													" / 04"
												]
											})
										]
									})
								]
							}, t.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-4 md:col-start-9 md:sticky md:top-32",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden rounded-sm shadow-elegant hidden md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: yago_gym_pose_default,
									alt: "Yago posando en el gimnasio",
									loading: "lazy",
									width: 1e3,
									height: 1200,
									className: "h-full w-full object-cover"
								})
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contacto",
				className: "py-28 md:py-40 bg-foreground text-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow mb-6",
							style: { color: "var(--sand)" },
							children: "¿Empezamos?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-5xl md:text-8xl",
							children: ["Tu mejor versión ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								style: { color: "var(--sand)" },
								children: "empieza hoy."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl mx-auto text-lg opacity-70 leading-relaxed",
							children: "Escríbeme y diseñaremos juntos el plan que se ajusta a tu vida, tus objetivos y tus tiempos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col sm:flex-row gap-4 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:yagovicre@gmail.com?subject=Información%20sobre%20asesoría&body=Hola%20Yago,%20me%20gustaría%20recibir%20más%20información%20sobre%20tus%20planes%20de%20entrenamiento.",
								className: "inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition",
								children: "YAGOVICRE@GMAIL.COM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/yagooo_.07/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center rounded-full border border-background/30 px-8 py-4 text-sm tracking-wide hover:bg-background/10 transition",
								children: "Instagram →"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "py-10 text-center text-xs text-muted-foreground tracking-widest uppercase",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Yago — Entrenador Personal Online"
				]
			})
		]
	});
}
export { Index as component };
